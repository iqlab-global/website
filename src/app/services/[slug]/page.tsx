import { Page } from '@/components/Page';
import { client } from '@/sanity/lib/client';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { notFound } from 'next/navigation';

const query = (slug: string) => `{
  "service": *[_type == "service" && introSection.slug.current == "${slug}"] {
    _id,
    introSection {
      title,
      subTitle,
      slug,
      description,
      "mainImage": mainImage.asset->url,
      "icon": icon.asset->url
    },
    whySection {
      "image": icon.asset->url,
      body,
      areas[] {
        title,
        description,
        "icon": icon.asset->url
      }
    },
    howSection[] {
      title,
      description,
      order
    },
    caseStudySection {
      title,
      description,
      projects[]->{
        _id,
        primarySection {
          title,
          subTitle,
          slug,
          industries,
          serviceType,
          techStack,
          "previewImage": previewImage.asset->url
        }
      }
    }
  }
}`;

type ServiceProps = {
  params: Promise<{ slug: string }>;
};

export default async function Service({ params }: ServiceProps) {
  const { slug } = await params;

  if (!slug) notFound();

  const response = await client.fetch(query(slug));
  const service = response?.service[0];
  const { introSection, whySection, howSection, caseStudySection } = service;

  console.log('service', service, whySection, howSection, caseStudySection);

  const pages = [
    { label: 'Services', href: '/services' },
    { label: introSection?.title, href: `/services/${slug}` },
  ];

  return (
    <Page whiteHeader>
      <Breadcrumb pages={pages} />
    </Page>
  );
}

import { Page } from '@/components/Page';
import { client } from '@/sanity/lib/client';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { notFound } from 'next/navigation';
import { PrimarySection } from './components/PrimarySection';
import { SecondSection } from './components/SecondSection';
import { ThirdSection } from './components/ThirdSection';
import { NextProjectsSection } from './components/NextProjectsSection';

const query = (slug: string) => `{
  "project": *[_type == "project" && primarySection.slug.current == "${slug}"] {
    _id,
    primarySection {
      title,
      subTitle,
      slug,
      industries,
      serviceType,
      techStack,
      body,
      "mainImage": mainImage.asset->url,
    },
    secondSection {
      title,
      body,
      "image1": image1.asset->url,
      "image2": image2.asset->url,
    },
    thirdSection {
      title,
      body,
      "image": image.asset->url,
    },
    nextProjectsSection {
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

  const { project } = await client.fetch(query(slug));
  const { primarySection, secondSection, thirdSection, nextProjectsSection } =
    project[0];

  const pages = [
    { label: 'Projects', href: '/projects' },
    { label: primarySection?.title, href: `/projects/${slug}` },
  ];

  return (
    <Page whiteHeader>
      <Breadcrumb pages={pages} />
      <PrimarySection {...primarySection} />
      <SecondSection {...secondSection} />
      <ThirdSection {...thirdSection} />
      <NextProjectsSection {...nextProjectsSection} />
    </Page>
  );
}

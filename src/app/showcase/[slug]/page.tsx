import { Page } from '@/components/Page';
import { client } from '@/sanity/lib/client';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { notFound } from 'next/navigation';
import { PrimarySection } from './components/PrimarySection';
import { SecondSection } from './components/SecondSection';
import { ThirdSection } from './components/ThirdSection';

const query = (slug: string) => `{
  "project": *[_type == "project" && primarySection.slug.current == "${slug}"] {
    _id,
    primarySection {
      title,
      subTitle,
      slug,
      "previewImage": previewImage.asset->url,
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
  const { primarySection, secondSection, thirdSection } = project[0];

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
    </Page>
  );
}

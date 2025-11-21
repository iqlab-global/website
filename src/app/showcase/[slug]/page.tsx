import { Page } from '@/components/Page';
import { client } from '@/sanity/lib/client';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { notFound } from 'next/navigation';
import { PrimarySection } from './components/PrimarySection';
import { SecondSection } from './components/SecondSection';
import { ThirdSection } from './components/ThirdSection';
import { NextProjectsSection } from './components/NextProjectsSection';

const query = (slug: string) => `{
  "project": *[_type == "project" && primarySection.slug.current == "${slug}"][0] {
    _id,
    primarySection {
      title,
      subTitle,
      slug,
      industries,
      serviceType,
      techStack,
      body,
      mainImage,
    },
    secondSection {
      title,
      body,
      image1,
      image2,
    },
    thirdSection {
      title,
      body,
      image,
    }
  },
  "projects": *[_type == "project" && primarySection.slug.current != "${slug}"] | order(_createdAt desc)[0..1] {
    _id,
    primarySection {
      title,
      subTitle,
      slug,
      industries,
      serviceType,
      techStack,
      previewImage
    }
  }
}`;

type ServiceProps = {
  params: Promise<{ slug: string }>;
};

export default async function Service({ params }: ServiceProps) {
  const { slug } = await params;

  if (!slug) notFound();

  const { project, projects } = await client.fetch(query(slug));

  if (!project) {
    notFound();
  }

  const { primarySection, secondSection, thirdSection } = project;

  const pages = [
    { label: 'Projects', href: '/showcase' },
    { label: primarySection?.title, href: `/showcase/${slug}` },
  ];

  const hasSecondSection =
    secondSection &&
    secondSection.title &&
    secondSection.body &&
    (secondSection.image1 || secondSection.image2);

  const hasThirdSection =
    thirdSection && thirdSection.title && thirdSection.body && thirdSection.image;

  return (
    <Page whiteHeader>
      <Breadcrumb pages={pages} />
      <PrimarySection {...primarySection} />
      {hasSecondSection && <SecondSection {...secondSection} />}
      {hasThirdSection && <ThirdSection {...thirdSection} />}
      <NextProjectsSection projects={projects} />
    </Page>
  );
}

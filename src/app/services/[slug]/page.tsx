import s from './style.module.scss';
import { Page } from '@/components/Page';
import { client } from '@/sanity/lib/client';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { notFound } from 'next/navigation';
import { IntroSection } from './components/IntroSection';
import { WhySection } from './components/WhySection';
import { HowSection } from './components/HowSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TechSection } from './components/TechSection';

const query = (slug: string) => `{
  "service": *[_type == "service" && introSection.slug.current == "${slug}"] {
    _id,
    introSection {
      title,
      subtitle,
      slug,
      description,
      "mainImage": mainImage.asset->url,
      "icon": icon.asset->url
    },
    whySection {
      "image": image.asset->url,
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
  },
  "techCapabilities": *[_type == "techCapability"] {
    _id,
    url,
    "icon": iconLightBg.asset->url,
    alt
  },
}`;

type ServiceProps = {
  params: Promise<{ slug: string }>;
};

export default async function Service({ params }: ServiceProps) {
  const { slug } = await params;

  if (!slug) notFound();

  const { service, techCapabilities } = await client.fetch(query(slug));
  const { introSection, whySection, howSection, caseStudySection } = service[0];

  const pages = [
    { label: 'Services', href: '/services' },
    { label: introSection?.title, href: `/services/${slug}` },
  ];

  return (
    <Page whiteHeader>
      <div className={s.blueBackground}>
        <Breadcrumb pages={pages} blueBg />
        <IntroSection {...introSection} />
      </div>
      <WhySection {...whySection} icon={introSection.icon} />
      <HowSection data={howSection} />
      <CaseStudiesSection {...caseStudySection} />
      <TechSection data={techCapabilities} />
    </Page>
  );
}

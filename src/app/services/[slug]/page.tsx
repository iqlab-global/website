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
  "service": *[_type == "service" && introSection.slug.current == "${slug}"][0] {
    _id,
    introSection {
      title,
      subtitle,
      slug,
      description,
      mainImage,
      "icon": icon.asset->url
    },
    whySection {
      image,
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
          previewImage
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
  const { introSection, whySection, howSection, caseStudySection } = service;

  const pages = [
    { label: 'Services', href: '/services' },
    { label: introSection?.title, href: `/services/${slug}` },
  ];

  const hasWhySection = whySection?.body || whySection?.areas?.length > 0;
  const hasHowSection = howSection?.length > 0;
  const hasCaseStudiesSection =
    caseStudySection?.title ||
    caseStudySection?.description ||
    caseStudySection?.projects?.length > 0;
  const hasTechSection = techCapabilities?.length > 0;

  return (
    <Page whiteHeader>
      <div className={s.blueBackground}>
        <Breadcrumb pages={pages} blueBg />
        <IntroSection {...introSection} />
      </div>
      {hasWhySection && (
        <WhySection {...whySection} icon={introSection.icon} />
      )}
      {hasHowSection && <HowSection data={howSection} />}
      {hasCaseStudiesSection && <CaseStudiesSection {...caseStudySection} />}
      {hasTechSection && <TechSection data={techCapabilities} />}
    </Page>
  );
}

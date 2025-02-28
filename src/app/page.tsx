import { Hero } from '@/widgets/Hero';
import { WhyChooseUs } from '@/widgets/WhyChooseUs';
import { client } from '@/sanity/lib/client';
import { ServicesWeProvided } from '@/widgets/ServicesWeProvided';
import { TechCapability } from '@/widgets/TechCapability';
import { FeaturedProjects } from '@/widgets/FeaturedProjects';
import { Page } from '@/components/Page';

const query = `*[_type == "homePageSingleton"][0] {
  name,
  heroSection {
    title,
    paragraph,
    ctaButtonText,
    ctaButtonUrl,
    servicesButtonText,
    servicesButtonUrl
  },
  whyChooseUs[] {
    "icon": icon.asset->url,
    title,
    description
  },
  servicesWeProvided[] {
    "icon": icon.asset->url,
    title,
    description
  }
}
`;

export default async function Home() {
  const { heroSection, whyChooseUs, servicesWeProvided } = await client.fetch(query);

  console.log('servicesWeProvided', servicesWeProvided);
  return (
    <Page>
      {heroSection && <Hero data={heroSection} />}
      {whyChooseUs && <WhyChooseUs data={whyChooseUs} />}
      {servicesWeProvided && <ServicesWeProvided data={servicesWeProvided} />}
      <TechCapability />
      <FeaturedProjects />
      {/*TODO: Testimonials section*/}
      {/*TODO: Insights & Inspiration section*/}
    </Page>
  );
}

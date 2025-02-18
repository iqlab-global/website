import { Hero } from '@/widgets/Hero';
import { WhyChooseUs } from '@/widgets/WhyChooseUs';
import { client } from '@/sanity/lib/client';
import { ServicesWeProvided } from '@/widgets/ServicesWeProvided';
import { TechCapability } from '@/widgets/TechCapability';
import { FeaturedProjects } from '@/widgets/FeaturedProjects';
import { Page } from '@/components/Page';

const query = '*[_type == "homePageSingleton"][0]{heroSection, whychooseus}';

export default async function Home() {
  const { heroSection, whychooseus } = await client.fetch(query);

  return (
    <Page>
      <Hero data={heroSection} />
      <WhyChooseUs data={whychooseus} />
      <ServicesWeProvided />
      <TechCapability />
      <FeaturedProjects />
      {/*TODO: Testimonials section*/}
      {/*TODO: Insights & Inspiration section*/}
    </Page>
  );
}

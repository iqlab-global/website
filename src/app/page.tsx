import { Hero } from '@/widgets/Hero';
import { WhyChooseUs } from '@/widgets/WhyChooseUs';
import { client } from '@/sanity/lib/client';
import { ServicesWeProvided } from '@/widgets/ServicesWeProvided';
import { TechCapability } from '@/widgets/TechCapability';
import { FeaturedProjects } from '@/widgets/FeaturedProjects';
import { Page } from '@/components/Page';
import Testimonials from '@/widgets/Testimonials';

const query = `{
  "homePage": *[_type == "homePageSingleton"][0] {
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
    testimonialsSection[] {
      companyName,
      description
    },
    servicesWeProvided[] {
      "icon": icon.asset->url,
      title,
      description
    },
  },
  "techCapabilities": *[_type == "techCapability"] {
    _id,
    "icon": icon.asset->url,
    alt
  },
  // "projects": *[_type == "project"] {
  //   _id,
  //   title,
  //   "slug": slug.current,
  //   "image": image.asset->url,
  //   shortDescription,
  //   isFeatured,
  //   tags[] {
  //     title
  //   }
  // },
  "featuredProjects": *[_type == "project" && isFeatured == true] {
    _id,
    title,
    "slug": slug.current,
    "image": image.asset->url,
    shortDescription,
    tags[] {
      title
    }
  }
}
`;

export default async function Home() {
  const { homePage, techCapabilities, featuredProjects } = await client.fetch(
    query,
    {}
  );
  const { heroSection, whyChooseUs, servicesWeProvided, testimonialsSection } =
    homePage ?? {};

  return (
    <Page>
      {heroSection && <Hero data={heroSection} />}
      {whyChooseUs && <WhyChooseUs data={whyChooseUs} />}
      {servicesWeProvided && <ServicesWeProvided data={servicesWeProvided} />}
      {techCapabilities.length !== 0 && (
        <TechCapability data={techCapabilities} />
      )}
      {featuredProjects.length !== 0 && (
        <FeaturedProjects data={featuredProjects} />
      )}
      {testimonialsSection && <Testimonials data={testimonialsSection} />}
      {/*TODO: Insights & Inspiration section*/}
    </Page>
  );
}

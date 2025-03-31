import { Hero } from '@/widgets/Hero';
import { WhyChooseUs } from '@/widgets/WhyChooseUs';
import { client } from '@/sanity/lib/client';
import { ServicesWeProvide } from '@/widgets/ServicesWeProvide';
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
      servicesButtonUrl,
      recentProject->{
        primarySection {
          slug,
          "image": previewImage.asset->url
        }
      }
    },
    whyChooseUs[] {
      "icon": icon.asset->url,
      title,
      description
    },
    servicesSection {
      services[]->{
        _id,
        introSection {
          title,
          slug,
          description,
          "icon": icon.asset->url
        }
      }
    },
    testimonialsSection[] {
      companyName,
      description
    },
  },
  "techCapabilities": *[_type == "techCapability"] {
    _id,
    url,
    "icon": iconDarkBg.asset->url,
    alt
  },
  "featuredProjects": *[_type == "project" && primarySection.isFeatured == true] {
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
}`;

export default async function Home() {
  const { homePage, techCapabilities, featuredProjects } = await client.fetch(
    query,
    {}
  );
  const { heroSection, whyChooseUs, servicesSection, testimonialsSection } =
    homePage ?? {};
  const { services } = servicesSection;

  return (
    <Page>
      {heroSection && <Hero data={heroSection} />}
      {!!whyChooseUs?.length && <WhyChooseUs data={whyChooseUs} />}
      {!!services?.length && <ServicesWeProvide data={services} />}
      {!!techCapabilities?.length && <TechCapability data={techCapabilities} />}
      {!!featuredProjects?.length && (
        <FeaturedProjects data={featuredProjects} />
      )}
      {!!testimonialsSection?.length && (
        <Testimonials data={testimonialsSection} />
      )}
      {/*TODO: Insights & Inspiration section*/}
    </Page>
  );
}

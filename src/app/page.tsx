import { client } from '@/sanity/lib/client';
import { Page } from '@/components/Page';
import { Hero } from '@/widgets/HomeHero';
import { WhyChooseUs } from '@/widgets/HomeWhyChooseUs';
import { ServicesWeProvide } from '@/widgets/ServicesWeProvide';
import { TechCapabilities } from '@/widgets/TechCapabilities';
import { FeaturedProjects } from '@/widgets/HomeFeaturedProjects';
import Testimonials from '@/widgets/HomeTestimonials';
import { InsightsInspiration } from '@/widgets/InsightsInspiration';

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
    "iconDark": iconDarkBg.asset->url,
    "iconLight": iconLightBg.asset->url,
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
  },
    "posts": *[_type == "post"] | order(publishedAt desc)[0..2] {
    _id,
    title,
    slug,
    mainImage
  }
}`;

export default async function Home() {
  const { homePage, techCapabilities, featuredProjects, posts } =
    await client.fetch(query, {});
  console.log('posts: ', posts);
  const { heroSection, whyChooseUs, servicesSection, testimonialsSection } =
    homePage ?? {};
  const { services } = servicesSection;

  return (
    <Page>
      {heroSection && <Hero data={heroSection} />}
      {!!whyChooseUs?.length && <WhyChooseUs data={whyChooseUs} />}
      {!!services?.length && <ServicesWeProvide data={services} />}
      {!!techCapabilities?.length && (
        <TechCapabilities data={techCapabilities} />
      )}
      {!!featuredProjects?.length && (
        <FeaturedProjects data={featuredProjects} />
      )}
      {!!testimonialsSection?.length && (
        <Testimonials data={testimonialsSection} />
      )}
      {posts?.length && <InsightsInspiration posts={posts} />}
    </Page>
  );
}

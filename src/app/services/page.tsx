import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { ServicesIntro } from '@/widgets/ServicesIntro';
import { ServicesAreas } from '@/widgets/ServicesAreas';
import { ServicesSlogan } from '@/widgets/ServicesSlogan';
import { TechCapability } from '@/widgets/TechCapability';
import { client } from '@/sanity/lib/client';
import IndustriesServed from '@/widgets/IndustriesServed';

const query = `{
  "servicesPage": *[_type == "servicePageSingleton"][0] {
    introSection {
      title,
      subtitle,
      description,
      "image": image.asset->url,
    },
    areasSection {
      title,
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
    industriesServedSection {
      title,
      description,
      industries[] {
        title,
        description,
        "image": image.asset->url
      }
    }
  },
  "techCapabilities": *[_type == "techCapability"] {
    _id,
    "icon": iconDarkBg.asset->url,
    alt
  }
}`;

export default async function Services() {
  const { servicesPage, techCapabilities } = await client.fetch(query);
  const {
    introSection = {},
    areasSection = {},
    industriesServedSection = {},
  } = servicesPage ?? {};

  return (
    <Page whiteHeader>
      <Breadcrumb pages={[{ label: 'Services', href: '/services' }]} />
      <ServicesIntro {...introSection} />
      <ServicesAreas {...areasSection} />
      <ServicesSlogan />
      <IndustriesServed {...industriesServedSection} />
      <TechCapability data={techCapabilities} />
    </Page>
  );
}

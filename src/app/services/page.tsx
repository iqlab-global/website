import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { TechCapabilities } from '@/widgets/TechCapabilities';
import { client } from '@/sanity/lib/client';

import { Intro } from './components/Intro';
import { Areas } from './components/Areas';
import { Slogan } from './components/Slogan';
import { Industries } from './components/Industries';

const query = `{
  "servicesPage": *[_type == "servicePageSingleton"][0] {
    introSection {
      title,
      subtitle,
      description,
      image,
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
        image
      }
    }
  },
  "techCapabilities": *[_type == "techCapability"] {
    _id,
    url,
    "iconDark": iconDarkBg.asset->url,
    "iconLight": iconLightBg.asset->url,
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
      <Intro {...introSection} />
      <Areas {...areasSection} />
      <Slogan />
      <Industries {...industriesServedSection} />
      <TechCapabilities data={techCapabilities} />
    </Page>
  );
}

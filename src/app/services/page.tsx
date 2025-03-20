import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { ServicesIntro } from '@/widgets/ServicesIntro';
import { ServicesAreas } from '@/widgets/ServicesAreas';
import { ServicesSlogan } from '@/widgets/ServicesSlogan';
import { TechCapability } from '@/widgets/TechCapability';
import { client } from '@/sanity/lib/client';
import IndustriesServed from '@/widgets/IndustriesServed';

const query = `{
  "servicesPage": *[_type == "servicesPageSingleton"][0] {},
  "techCapabilities": *[_type == "techCapability"] {
    _id,
    "icon": icon.asset->url,
    alt
  }
}
`;

export default async function Services() {
  const { techCapabilities } = await client.fetch(query);

  return (
    <Page whiteHeader>
      <Breadcrumb currentPage='Services' />
      <ServicesIntro />
      <ServicesAreas />
      <ServicesSlogan />
      <IndustriesServed />
      <TechCapability data={techCapabilities} />
    </Page>
  );
}

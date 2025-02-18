import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { ServicesIntro } from '@/widgets/ServicesIntro';
import { ServicesAreas } from '@/widgets/ServicesAreas';
import { ServicesSlogan } from '@/widgets/ServicesSlogan';
import { TechCapability } from '@/widgets/TechCapability';

export default function Service() {
  return (
    <Page whiteHeader>
      <Breadcrumb />
      <ServicesIntro />
      <ServicesAreas />
      <ServicesSlogan />
      {/*TODO: Industries served section.*/}
      <TechCapability />
    </Page>
  );
}

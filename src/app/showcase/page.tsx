import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { ShowcaseIntro } from '@/widgets/ShowcaseIntro';
import { ShowcaseList } from '@/widgets/ShowcaseList';

export default function Showcase() {
  return (
    <Page whiteHeader>
      <Breadcrumb />
      <ShowcaseIntro />
      <ShowcaseList />
    </Page>
  );
}

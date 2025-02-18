import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { Join } from '@/app/careers/components/Join';
import { Positions } from '@/app/careers/components/Positions';

export default function Careers() {
  return (
    <Page whiteHeader>
      <Breadcrumb />
      <Join />
      <Positions />
      {/*TODO: Company Culture Section*/}
      {/*TODO: Internship Program Section*/}
    </Page>
  );
}

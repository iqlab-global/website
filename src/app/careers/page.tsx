import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { Join } from '@/app/careers/components/Join';
import { Positions } from '@/app/careers/components/Positions';
import { CompanyCulture } from '@/app/careers/components/CompanyCulture';

export default function Careers() {
  return (
    <Page whiteHeader>
      <Breadcrumb />
      <Join />
      <Positions />
      <CompanyCulture />
      {/*TODO: Internship Program Section*/}
    </Page>
  );
}

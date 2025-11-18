import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { Join } from '@/app/careers/components/Join';
import { Positions } from '@/app/careers/components/Positions';
import { client } from '@/sanity/lib/client';

const query = `{
  "careersPage": *[_type == "careersPageSingleton"][0] {
    heroSection {
      title,
      description,
      mapImage
    }
  },
  "jobs": *[_type == "job" && status == "active"] | order(publishedDate desc) {
    _id,
    introSection {
      title,
      slug {
        current
      },
      location,
      employmentType,
      experienceLevel
    }
  }
}`;

export default async function Careers() {
  const { careersPage, jobs } = await client.fetch(query);
  const { heroSection } = careersPage ?? {};

  const pages = [{ label: 'Careers', href: '/careers' }];

  return (
    <Page whiteHeader>
      <Breadcrumb pages={pages} />
      <Join {...heroSection} />
      <Positions jobs={jobs} />
      {/*TODO: Company Culture Section*/}
      {/*TODO: Internship Program Section*/}
    </Page>
  );
}

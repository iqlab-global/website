import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { client } from '@/sanity/lib/client';
import { PAGE_SIZE } from '@/app/api/projects/route';

import { Intro } from './components/Intro';
import { ProjectList } from './components/ProjectList';

const query = `{
  "showcasePage": *[_type == "showcasePageSingleton"][0] {
    introSection {
      title,
      subtitle,
      body,
      "image": image.asset->url,
    },
  },
   "projects": *[_type == "project"] | order(_createdAt desc) [0...${PAGE_SIZE}] {
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
  "total": count(*[_type == "project"])
}`;

export default async function Showcase() {
  const { showcasePage, projects, total } = await client.fetch(query, {});
  const { introSection } = showcasePage ?? {};

  return (
    <Page whiteHeader>
      <Breadcrumb pages={[{ label: 'Showcase', href: '/showcase' }]} />
      <Intro {...introSection} />
      <ProjectList projects={projects} total={total} />
    </Page>
  );
}

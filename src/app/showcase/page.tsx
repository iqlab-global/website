import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { client } from '@/sanity/lib/client';

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
  "projects": *[_type == "project"] {
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
  }
}`;

export default async function Showcase() {
  const { showcasePage, projects } = await client.fetch(query, {});
  const { introSection } = showcasePage ?? {};

  return (
    <Page whiteHeader>
      <Breadcrumb pages={[{ label: 'Showcase', href: '/showcase' }]} />
      <Intro {...introSection} />
      <ProjectList projects={projects} />
    </Page>
  );
}

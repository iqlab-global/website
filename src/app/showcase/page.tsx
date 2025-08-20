import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { client } from '@/sanity/lib/client';

import { Intro } from './components/Intro';
import { ProjectList } from './components/ProjectList';

const queryContent = `{
  "showcasePage": *[_type == "showcasePageSingleton"][0] {
    introSection {
      title,
      subtitle,
      body,
      "image": image.asset->url,
    },
  }
}`;

export default async function Showcase() {
  const { showcasePage } = await client.fetch(queryContent, {});
  const { introSection } = showcasePage ?? {};

  return (
    <Page whiteHeader>
      <Breadcrumb pages={[{ label: 'Showcase', href: '/showcase' }]} />
      <Intro {...introSection} />
      <ProjectList />
    </Page>
  );
}

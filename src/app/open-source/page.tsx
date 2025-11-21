import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { client, PROJECT_PAGE_SIZE } from '@/sanity/lib/client';
import { ProjectsIntro } from '@/widgets/ProjectsIntro';
import { ProjectsList } from '@/widgets/ProjectsList';

const query = `{
  "openSourcePage": *[_type == "openSourcePageSingleton"][0] {
    introSection {
      title,
      subtitle,
      body
    },
  },
   "posts": *[_type == "post" && "Open Source" in categories[]->title] | order(publishedAt desc) [0...${PROJECT_PAGE_SIZE}] {
    _id,
    title,
    slug,
    mainImage,
    categories[]->{
      title
    }
  },
  "total": count(*[_type == "post" && "Open Source" in categories[]->title])
}`;

export default async function OpenSource() {
  const { openSourcePage, posts, total } = await client.fetch(query, {});
  const { introSection } = openSourcePage ?? {};

  return (
    <Page whiteHeader>
      <Breadcrumb pages={[{ label: 'Open Source', href: '/open-source' }]} />
      <ProjectsIntro {...introSection} />
      <ProjectsList projects={posts} total={total} apiEndpoint='/api/open-source-posts' />
    </Page>
  );
}

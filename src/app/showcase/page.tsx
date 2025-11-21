import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { client, PROJECT_PAGE_SIZE } from '@/sanity/lib/client';
import { ProjectsIntro } from '@/widgets/ProjectsIntro';
import { ProjectsList } from '@/widgets/ProjectsList';

const query = `{
  "showcasePage": *[_type == "showcasePageSingleton"][0] {
    introSection {
      title,
      subtitle,
      body
    },
  },
   "projects": *[_type == "project"] | order(_createdAt desc) [0...${PROJECT_PAGE_SIZE}] {
    _id,
    primarySection {
      title,
      subTitle,
      slug,
      industries,
      serviceType,
      techStack,
      previewImage
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
      <ProjectsIntro {...introSection} />
      <ProjectsList projects={projects} total={total} apiEndpoint='/api/projects' />
    </Page>
  );
}

import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { client, PAGE_SIZE } from '@/sanity/lib/client';
import { Intro } from '@/app/blog/components/Intro';
import { PostsList } from '@/app/blog/components/PostsList';

const query = `{
  "blogPage": *[_type == "blogPageSingleton"][0] {
    introSection {
      title,
      subtitle,
      body
    },
  },
  "posts": *[_type == "post"] | order(_createdAt desc) [0...${PAGE_SIZE * 3}] {
    _id,
    title,
    slug,
    mainImage,
  },
  "total": count(*[_type == "post"])
}`;

export default async function Blogs() {
  const { blogPage, posts, total } = await client.fetch(query, {});
  const { introSection } = blogPage ?? {};

  return (
    <Page whiteHeader>
      <Breadcrumb pages={[{ label: 'Blogs', href: '/blogs' }]} />
      <Intro {...introSection} />
      {!!total && <PostsList posts={posts} total={total} />}
    </Page>
  );
}

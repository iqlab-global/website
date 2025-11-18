import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { client } from '@/sanity/lib/client';
import { Hero } from './components/Hero';
import { BlogsList } from './components/BlogsList';
import { POSTS_PER_PAGE } from '@/constants/posts';

const query = `{
  "blogsPage": *[_type == "blogsPageSingleton"][0] {
    heroSection {
      title,
      subtitle,
      description
    },
  },
  "posts": *[_type == "post"] | order(publishedAt desc) [0...${POSTS_PER_PAGE}] {
    _id,
    title,
    slug,
    mainImage,
    categories[]->{
      title
    }
  },
  "total": count(*[_type == "post"])
}`;

export default async function Blogs() {
  const { blogsPage, posts, total } = await client.fetch(query, {});
  const { heroSection } = blogsPage ?? {};

  return (
    <Page whiteHeader>
      <Breadcrumb pages={[{ label: 'Blogs', href: '/blogs' }]} />
      <Hero {...heroSection} />
      <BlogsList posts={posts} total={total} />
    </Page>
  );
}

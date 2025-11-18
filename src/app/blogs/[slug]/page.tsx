import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { client } from '@/sanity/lib/client';
import { PostPrimarySection } from '@/widgets/PostPrimarySection';
import { PostContentWithSidebar } from '@/widgets/PostContentWithSidebar';
import { NextPostsSection } from '@/widgets/NextPostsSection';
import { notFound } from 'next/navigation';

const query = (slug: string) => `{
  "post": *[_type == "post" && slug.current == "${slug}"][0] {
    _id,
    title,
    subtitle,
    slug,
    mainImage,
    publishedAt,
    author->{
      name,
      image
    },
    categories[]->{
      title
    },
    body
  },
  "posts": *[_type == "post" && slug.current != "${slug}"] | order(publishedAt desc)[0..1] {
    _id,
    title,
    slug,
    mainImage,
    categories[]->{
      title
    }
  }
}`;

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const { post, posts } = await client.fetch(query(slug));

  if (!post) {
    notFound();
  }

  return (
    <Page whiteHeader>
      <Breadcrumb pages={[{ label: 'Blogs', href: '/blogs' }, { label: post.title }]} />
      <PostPrimarySection
        title={post.title}
        subtitle={post.subtitle}
        publishedAt={post.publishedAt}
        categories={post.categories}
        author={post.author}
        mainImage={post.mainImage}
      />
      <PostContentWithSidebar body={post.body} />
      <NextPostsSection posts={posts} backLink='/blogs' backLinkText='/ back to archive' />
    </Page>
  );
}

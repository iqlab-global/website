import { Page } from '@/components/Page';
import { client } from '@/sanity/lib/client';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { notFound } from 'next/navigation';

const query = (slug: string) => `{
  "post": *[_type == "post" && slug.current == "${slug}"][0] {
    _id,
    title,
    industries,
    serviceType,
    techStack,
    body,
    mainImage,
  },
  "posts": *[_type == "post" && slug.current != "${slug}"] | order(publishedAt desc)[0..2] {
    _id,
    title,
    industries,
    serviceType,
    techStack,
    mainImage
  }
}`;

type ServiceProps = {
  params: Promise<{ slug: string }>;
};

export default async function Service({ params }: ServiceProps) {
  const { slug } = await params;

  if (!slug) notFound();

  const { post, posts } = await client.fetch(query(slug));
  const { title, industries, serviceType, techStack, mainImage } = post;

  console.log('posts: ', posts);

  const pages = [
    { label: 'Blog', href: '/blog' },
    { label: title, href: `/blog/${slug}` },
  ];

  return (
    <Page whiteHeader>
      <Breadcrumb pages={pages} />
    </Page>
  );
}

import Link from 'next/link';
import { getHotspotImageUrl } from '@/sanity/lib/image';
import { Post } from '@/lib/types';
import s from './style.module.scss';

interface BlogCardProps {
  post: Post;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  const isOpenSource = post.categories?.some(
    (cat) => cat.title === 'open-source' || cat.title === 'Open Source'
  );
  const basePath = isOpenSource ? '/open-source' : '/blogs';

  return (
    <Link href={`${basePath}/${post.slug.current}`} className={s.card}>
      <div className={s.imageWrapper}>
        {post.mainImage && (
          <img src={getHotspotImageUrl(post.mainImage)} alt={post.title} />
        )}
      </div>
      <h3>{post.title}</h3>
    </Link>
  );
};

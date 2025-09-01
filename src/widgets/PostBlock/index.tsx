import clsx from 'clsx';
import s from './style.module.scss';
import { Post } from '@/lib/types';
import { getHotspotImageUrl } from '@/sanity/lib/image';

type Props = Post & {
  blueBg?: boolean;
  className?: string;
};

export const PostBlock = ({
  _id,
  title,
  slug,
  mainImage,
  blueBg,
  className,
}: Props) => {
  return (
    <a
      key={_id}
      href={`/blog/${slug.current}`}
      className={clsx(s.block, className, {
        [s.blueBg]: blueBg,
      })}
    >
      <div className={s.imageWrapper}>
        <img src={getHotspotImageUrl(mainImage)} alt={title} />
      </div>
      <h5>{title}</h5>
    </a>
  );
};

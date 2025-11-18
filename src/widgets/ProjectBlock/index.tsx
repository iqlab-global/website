import clsx from 'clsx';
import Link from 'next/link';
import s from './style.module.scss';
import { Project, Post, Styles } from '@/lib/types';
import { getHotspotImageUrl } from '@/sanity/lib/image';

type Props = (Project | Post) & {
  styleOverides?: Styles;
  blueBg?: boolean;
  firstLarge?: boolean;
  className?: string;
};

function isPost(item: Project | Post): item is Post {
  return 'title' in item && !('primarySection' in item);
}

export const ProjectBlock = (props: Props) => {
  const { _id, blueBg, firstLarge, className } = props;

  if (isPost(props)) {
    const { title, slug, mainImage, categories } = props;
    const isOpenSource = categories?.some((cat) => cat.title === 'Open Source');
    const basePath = isOpenSource ? '/open-source' : '/blogs';

    return (
      <Link
        key={_id}
        href={`${basePath}/${slug?.current}`}
        className={clsx(s.block, className, {
          [s.blueBg]: blueBg,
          [s.firstLarge]: firstLarge,
        })}
      >
        {mainImage && (
          <div className={s.imageWrapper}>
            <img src={getHotspotImageUrl(mainImage)} alt={title} />
          </div>
        )}
        <h5>{title}</h5>
        <div className={s.industry}>
          {categories?.map((cat) => cat.title).join(', ') || ''}
        </div>
        <div className={s.tags}></div>
        <p></p>
      </Link>
    );
  }

  const { primarySection } = props;
  const { title, subTitle, slug, industries, serviceType, techStack, previewImage } =
    primarySection ?? {};

  return (
    <Link
      key={_id}
      href={`/showcase/${slug?.current}`}
      className={clsx(s.block, className, {
        [s.blueBg]: blueBg,
        [s.firstLarge]: firstLarge,
      })}
    >
      {previewImage && (
        <div className={s.imageWrapper}>
          <img src={getHotspotImageUrl(previewImage)} alt={title} />
        </div>
      )}
      <h5>{title}</h5>
      <div className={s.industry}>{industries}</div>
      <div className={s.tags}>
        <span>{serviceType}</span>
        <span>{techStack}</span>
      </div>
      <p>{subTitle}</p>
    </Link>
  );
};

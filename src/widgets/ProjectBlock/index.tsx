import clsx from 'clsx';
import s from './style.module.scss';
import { Project, Styles } from '@/lib/types';

type Props = Project & {
  styleOverides?: Styles;
  blueBg?: boolean;
  firstLarge?: boolean;
  className?: string;
};

export const ProjectBlock = ({
  _id,
  primarySection,
  blueBg,
  firstLarge,
  className,
}: Props) => {
  const {
    title,
    subTitle,
    slug,
    industries,
    serviceType,
    techStack,
    previewImage,
  } = primarySection;

  return (
    <a
      key={_id}
      href={`/showcase/${slug.current}`}
      className={clsx(s.block, className, {
        [s.blueBg]: blueBg,
        [s.firstLarge]: firstLarge,
      })}
    >
      <div className={s.imageWrapper}>
        <img src={previewImage} alt={title} />
      </div>
      <h5>{title}</h5>
      <div className={s.industry}>{industries}</div>
      <div className={s.tags}>
        <span>{serviceType}</span>
        <span>{techStack}</span>
      </div>
      <p>{subTitle}</p>
    </a>
  );
};

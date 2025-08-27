import s from './style.module.scss';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getHotspotImageUrl } from '@/sanity/lib/image';

interface CardProps {
  title: string;
  description: string;
  img: SanityImageSource;
}

export const IndustryCard = ({ title, description, img }: CardProps) => {
  return (
    <div className={s.serviceCardWrapper}>
      <img
        className={s.industryImage}
        src={getHotspotImageUrl(img)}
        alt={title}
      />
      <div className={s.textWrapper}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

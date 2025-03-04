import s from './style.module.scss';
import AppImage from '@/components/AppImage';
import { StaticImageData } from 'next/image';

interface CardProps {
  title: string;
  description: string;
  img: StaticImageData;
}

export const Card = ({ title, description, img }: CardProps) => {
  return (
    <div className={s.serviceCardWrapper}>
      <AppImage className={s.industryServedCard} src={img} alt="Healthcare" />
      <div className={s.textWrapper}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

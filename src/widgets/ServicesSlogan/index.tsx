import s from './style.module.scss';
import SloganImg from '@/assets/images/slogan.jpeg';

export const ServicesSlogan = () => {
  return (
    <section className={s.section}>
      <img src={SloganImg.src} alt='Slogan' />
    </section>
  );
};

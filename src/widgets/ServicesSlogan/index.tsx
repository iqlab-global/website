import s from './style.module.scss';
import SloganImg from '@/assets/images/services_slogan.jpg';

export const ServicesSlogan = () => {
  return (
    <section className={s.section}>
      <img src={SloganImg.src} alt='Slogan' />
    </section>
  );
};

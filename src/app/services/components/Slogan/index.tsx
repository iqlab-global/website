import s from './style.module.scss';
import SloganImg from '@/assets/images/services_slogan.jpg';

export const Slogan = () => {
  return (
    <section className={s.section}>
      <img src={SloganImg.src} alt='Slogan' />
    </section>
  );
};

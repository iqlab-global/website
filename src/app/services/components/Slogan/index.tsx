import s from './style.module.scss';
import SloganImg from '@/assets/images/services_slogan.jpg';
import SloganImgMobile from '@/assets/images/services_slogan_mobile.jpg';

export const Slogan = () => {
  return (
    <section className={s.section}>
      <img className={s.slogan} src={SloganImg.src} alt='Slogan' />
      <img className={s.sloganMobile} src={SloganImgMobile.src} alt='Slogan' />
    </section>
  );
};

import s from './style.module.scss';
import AboutCtaImg from '@/assets/images/about-cta.jpeg';

export const AboutCta = () => {
  return (
    <section className={s.section}>
      <img src={AboutCtaImg.src} alt='About Cta' />
    </section>
  );
};

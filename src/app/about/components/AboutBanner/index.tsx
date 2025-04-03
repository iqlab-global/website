import s from './style.module.scss';
import AboutBannerImg from '@/assets/images/about-banner.jpg';

export const AboutBanner = () => {
  return (
    <section className={s.section}>
      <img src={AboutBannerImg.src} alt='About Cta' />
    </section>
  );
};

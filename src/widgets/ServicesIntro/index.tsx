import s from './style.module.scss';
import ServiceImage from '@/assets/images/services.jpeg';
import { Container } from '@/components/Container';

export const ServicesIntro = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <h1>What We Offer</h1>
          <div className={s.info}>
            <h3>At IQ Lab, we specialize in a wide range of services:</h3>
            <p>
              IQ Lab provides a complete and expert approach to building
              successful e-business applications. IQ Lab helps customers
              leverage the Internet to save and make money, save time, improve
              efficiency, build stronger relationships, transact business and
              solve challenges. The focus is on measurable return and improved
              business processes. We seek to partner with clients, exploit the
              latest technologies, and deliver real, measurable value in a rapid
              time frame.
            </p>
          </div>
          <div className={s.image}>
            <img src={ServiceImage.src} alt='Services' />
          </div>
        </div>
      </Container>
    </section>
  );
};

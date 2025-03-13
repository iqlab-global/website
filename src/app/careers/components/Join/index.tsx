import s from './style.module.scss';
import WorldMap from '@/assets/images/world-map.png';
import { Container } from '@/components/Container';

export const Join = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <h1>Join Our Team</h1>
          <div className={s.content}>
            <div className={s.info}>
              <h4>Shape the Future with Innovation and Creativity</h4>
              <p>
                At our studio, we believe in fostering a workplace where
                innovation thrives, and creativity knows no bounds. We’re on a
                mission to create impactful software solutions, and we’re
                looking for talented, passionate individuals to join us on this
                journey. Here, you’ll find more than just a job—you’ll discover
                opportunities to grow, learn, and make a real difference.
              </p>
            </div>
            <img src={WorldMap.src} alt='World Map' />
          </div>
        </div>
      </Container>
    </section>
  );
};

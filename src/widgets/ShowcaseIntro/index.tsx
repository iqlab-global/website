import { Container } from '@/components/Container';
import s from './style.module.scss';

export const ShowcaseIntro = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <h1>Our Work Speaks for Itself</h1>
          <div className={s.info}>
            <h2>Showcasing Innovation, Craft, and Results-Driven Solutions</h2>
            {/*TODO: Add dots figure here*/}
            <div className={s.desc}>
              <p>
                At our boutique studio, we bring ideas to life through
                precision, passion, and technical expertise. Each project in our
                portfolio reflects our commitment to understanding client needs
                and delivering solutions that go beyond expectations. From
                sleek, responsive designs to complex, tailored applications, we
                take pride in crafting software that is not only functional but
                also transformative.
              </p>
              <p>
                Our work stands as a testament to our dedication to pushing
                boundaries and achieving excellence. Explore our portfolio to
                discover how we’ve empowered clients across industries to reach
                new heights in a digital-first world.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

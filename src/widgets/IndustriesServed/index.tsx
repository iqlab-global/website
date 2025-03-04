import s from './style.module.scss';
import { Container } from '@/components/Container';
import ServiceImg from '@/assets/images/service-1.png';
import { Card } from './components/Card';
import AppImage from '@/components/AppImage';
import Pattern from '@/assets/images/textures/pattern-2.svg';

export default function IndustriesServed() {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.patternWrapper}>
            <AppImage className={s.patternImg} src={Pattern} alt="Pattern" />
          </div>
          <div className={s.mainContent}>
            <div className={s.headingWrapper}>
              <h2>Industries Served</h2>
              <p>
                We bring our expertise to industries like healthcare, finance, sports, and government sectors,
                providing robust, scalable solutions
              </p>
            </div>
            <div className={s.serviceCards}>
              <Card
                img={ServiceImg}
                title="Healthcare"
                description="Reshape the patient experiences and future of healthcare"
              />
              <Card
                img={ServiceImg}
                title="Healthcare"
                description="Reshape the patient experiences and future of healthcare"
              />
              <Card
                img={ServiceImg}
                title="Healthcare"
                description="Reshape the patient experiences and future of healthcare"
              />
              <Card
                img={ServiceImg}
                title="Healthcare"
                description="Reshape the patient experiences and future of healthcare"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

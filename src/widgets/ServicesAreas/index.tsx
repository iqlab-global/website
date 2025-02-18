import s from './style.module.scss';
import { Container } from '@/components/Container';
import CodeIconImg from '@/assets/images/code.svg';

export const ServicesAreas = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <h2 className={s.title}>Our consultants are highly specialized in the following areas:</h2>
          <div className={s.list}>
            <div className={s.block}>
              <img src={CodeIconImg.src} alt="Code" />
              <h6>Custom Software Development</h6>
              <p>Tailored solutions to address your business needs.</p>
            </div>
            <div className={s.block}>
              <img src={CodeIconImg.src} alt="Code" />
              <h6>Custom Software Development</h6>
              <p>Tailored solutions to address your business needs.</p>
            </div>
            <div className={s.block}>
              <img src={CodeIconImg.src} alt="Code" />
              <h6>Custom Software Development</h6>
              <p>Tailored solutions to address your business needs.</p>
            </div>
            <div className={s.block}>
              <img src={CodeIconImg.src} alt="Code" />
              <h6>Custom Software Development</h6>
              <p>Tailored solutions to address your business needs.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

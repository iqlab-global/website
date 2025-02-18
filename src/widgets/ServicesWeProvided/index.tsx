import s from './style.module.scss';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import PatternImg from '@/assets/images/pattern.svg';
import ServicesImg from '@/assets/images/services.jpeg';
import { DotsPattern } from '@/assets/icons/DotsPattern';
import { CodeIcon } from '@/assets/icons/CodeIcon';

export const ServicesWeProvided = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <img className={s.pattern} src={PatternImg.src} alt="Pattern" />
          <div className={s.header}>
            <h2>
              Services <br />
              We Provided
            </h2>
            <Button outline>/ Everything we do</Button>
          </div>
          <div className={s.content}>
            <div className={s.image}>
              <img src={ServicesImg.src} alt="Services" />
              <DotsPattern />
            </div>
            <div className={s.list}>
              <div className={s.block}>
                <CodeIcon />
                <h6>Custom Software Development</h6>
                <p>Tailored solutions to address your business needs.</p>
              </div>
              <div className={s.block}>
                <CodeIcon />
                <h6>Custom Software Development</h6>
                <p>Tailored solutions to address your business needs.</p>
              </div>
              <div className={s.block}>
                <CodeIcon />
                <h6>Custom Software Development</h6>
                <p>Tailored solutions to address your business needs.</p>
              </div>
              <div className={s.block}>
                <CodeIcon />
                <h6>Custom Software Development</h6>
                <p>Tailored solutions to address your business needs.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

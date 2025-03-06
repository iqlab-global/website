import s from './style.module.scss';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import PatternImg from '@/assets/images/pattern.svg';
import ServicesImg from '@/assets/images/services.jpeg';
import { DotsPattern } from '@/assets/icons/DotsPattern';

interface ServicesWeProvidedProps {
  data: {
    title: string;
    icon: string;
    description: string;
  }[];
}

export const ServicesWeProvided = ({ data }: ServicesWeProvidedProps) => {
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
            <Button href="/services" outline>
              / Everything we do
            </Button>
          </div>
          <div className={s.content}>
            <div className={s.image}>
              <img src={ServicesImg.src} alt="Services" />
              <DotsPattern />
            </div>
            <div className={s.list}>
              {data.map(({ icon, title, description }) => (
                <div className={s.block} key={title}>
                  <img src={icon} alt={title} />
                  <h6>{title}</h6>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

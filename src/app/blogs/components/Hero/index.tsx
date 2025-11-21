import { Container } from '@/components/Container';
import s from './style.module.scss';

type Props = {
  title?: string;
  subtitle?: string;
  description?: string;
};

export const Hero = ({ title, subtitle, description }: Props) => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <h1>{title}</h1>
          <div className={s.info}>
            <h2>{subtitle}</h2>
            <p>{description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

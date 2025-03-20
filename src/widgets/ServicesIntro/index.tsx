import s from './style.module.scss';
import { Container } from '@/components/Container';

type Props = {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
};

export const ServicesIntro = ({
  title,
  subtitle,
  description,
  image,
}: Props) => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <h1>{title}</h1>
          <div className={s.info}>
            <h3>{subtitle}</h3>
            <p>{description}</p>
          </div>
          <div className={s.image}>
            <img src={image} alt='Services' />
          </div>
        </div>
      </Container>
    </section>
  );
};

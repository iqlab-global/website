import s from './style.module.scss';
import { Container } from '@/components/Container';
import Pattern from '@/assets/images/textures/pattern-4.svg';

type Props = {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
};

export const Intro = ({ title, subtitle, description, image }: Props) => {
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
            <img className={s.pattern} src={Pattern.src} alt='Pattern' />
            <img className={s.main} src={image} alt='Services' />
          </div>
        </div>
      </Container>
    </section>
  );
};

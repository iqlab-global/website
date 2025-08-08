import s from './style.module.scss';
import { Container } from '@/components/Container';
import { BlockContent } from '@/components/Block';
import Pattern from '@/assets/images/textures/pattern-4.svg';

type Props = {
  title?: string;
  body?: string;
  image?: string;
};

export const ThirdSection = ({ title, body, image }: Props) => {
  return (
    <section>
      <Container className={s.wrapper}>
        <div className={s.body}>
          <div className={s.title}>
            <h3>{title}</h3>
          </div>
          <div className={s.bodyContent}>
            <BlockContent content={body} />
          </div>
        </div>
        <div className={s.images}>
          <img className={s.pattern} src={Pattern.src} alt='Pattern' />
          <img className={s.main} src={image} alt={title} />
        </div>
      </Container>
    </section>
  );
};

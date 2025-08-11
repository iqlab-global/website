import s from './style.module.scss';
import { Container } from '@/components/Container';
import { BlockContent } from '@/components/Block';
import Pattern from '@/assets/images/textures/pattern-2.svg';

type Props = {
  title?: string;
  body?: string;
  image1?: string;
  image2?: string;
};

export const SecondSection = ({ title, body, image1, image2 }: Props) => {
  return (
    <section>
      <Container className={s.wrapper}>
        <div className={s.body}>
          <div className={s.title}>
            <h3>{title}</h3>
            <img src={Pattern.src} alt={title} />
          </div>
          <div className={s.bodyContent}>
            <BlockContent content={body} />
          </div>
        </div>
        <div className={s.images}>
          <img src={image1} alt={title} />
          <img src={image2} alt={title} />
        </div>
      </Container>
    </section>
  );
};

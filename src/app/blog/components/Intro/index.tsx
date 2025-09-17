import { BlockContent } from '@/components/Block';
import { Container } from '@/components/Container';

import s from './style.module.scss';

type Props = {
  title?: string;
  subtitle?: string;
  body?: string[];
};

export const Intro = ({ title, subtitle, body }: Props) => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <h1>{title}</h1>
          <div className={s.info}>
            <div className={s.subtitleWrapper}>
              <h2>{subtitle}</h2>
            </div>
            <div className={s.desc}>
              <BlockContent content={body} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

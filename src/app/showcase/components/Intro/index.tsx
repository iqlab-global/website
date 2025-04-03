import { BlockContent } from '@/components/Block';
import { Container } from '@/components/Container';
import Pattern from '@/assets/images/textures/pattern-2.svg';
import s from './style.module.scss';
import AppImage from '@/components/AppImage';

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
              <AppImage className={s.patternImg1} src={Pattern} alt='Pattern' />
            </div>
            <div className={s.desc}>
              <BlockContent content={body} />
              <AppImage className={s.patternImg2} src={Pattern} alt='Pattern' />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

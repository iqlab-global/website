import s from './style.module.scss';
import { Container } from '@/components/Container';
import Pattern from '@/assets/images/textures/pattern-4.svg';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getHotspotImageUrl } from '@/sanity/lib/image';

type Props = {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: SanityImageSource;
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
            <img
              className={s.main}
              src={getHotspotImageUrl(image)}
              alt='Services'
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

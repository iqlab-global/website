import s from './style.module.scss';
import { Container } from '@/components/Container';
import Pattern from '@/assets/images/textures/pattern-2-light.svg';
import { Button } from '@/components/Button';
import Link from 'next/link';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getHotspotImageUrl } from '@/sanity/lib/image';

type Props = {
  title?: string;
  subtitle?: string;
  description?: string;
  mainImage?: SanityImageSource;
};

export const IntroSection = ({
  title,
  subtitle,
  description,
  mainImage,
}: Props) => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.info}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <p>{description}</p>
            <div className={s.buttons}>
              <Button className={s.contact} href='/contact'>
                Get in touch
              </Button>
              <Link className={s.scroll} href='/services'>
                Learn more - scroll down ↴
              </Link>
            </div>
          </div>
          <div className={s.image}>
            <img className={s.pattern} src={Pattern.src} alt='Services' />
            <img
              className={s.mainImage}
              src={getHotspotImageUrl(mainImage)}
              alt='Services'
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

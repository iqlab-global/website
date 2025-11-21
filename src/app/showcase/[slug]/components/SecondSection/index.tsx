import { Container } from '@/components/Container';
import { BlockContent } from '@/components/Block';
import Pattern from '@/assets/images/textures/pattern-2.svg';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getHotspotImageUrl } from '@/sanity/lib/image';

import s from './style.module.scss';

type Props = {
  title?: string;
  body?: string;
  image1?: SanityImageSource;
  image2?: SanityImageSource;
};

export const SecondSection = ({ title, body, image1, image2 }: Props) => {
  const image1Url = image1 ? getHotspotImageUrl(image1) : '';
  const image2Url = image2 ? getHotspotImageUrl(image2) : '';

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
          {image1Url && <img src={image1Url} alt={title} />}
          {image2Url && <img src={image2Url} alt={title} />}
        </div>
      </Container>
    </section>
  );
};

import s from './style.module.scss';
import WorldMap from '@/assets/images/world-map.png';
import { Container } from '@/components/Container';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getHotspotImageUrl } from '@/sanity/lib/image';

type Props = {
  title?: string;
  description?: string;
  mapImage?: SanityImageSource;
};

export const Join = ({ title, description, mapImage }: Props) => {
  const defaultTitle = 'Join Our Team';
  const defaultDescription =
    "At our studio, we believe in fostering a workplace where innovation thrives, and creativity knows no bounds. We're on a mission to create impactful software solutions, and we're looking for talented, passionate individuals to join us on this journey. Here, you'll find more than just a job—you'll discover opportunities to grow, learn, and make a real difference.";

  const imageUrl = mapImage ? getHotspotImageUrl(mapImage) : WorldMap.src;

  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <h1>{title || defaultTitle}</h1>
          <div className={s.content}>
            <div className={s.info}>
              <p>{description || defaultDescription}</p>
            </div>
            <img src={imageUrl} alt='World Map' />
          </div>
        </div>
      </Container>
    </section>
  );
};

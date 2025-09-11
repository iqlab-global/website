import s from './style.module.scss';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import PatternImg from '@/assets/images/pattern.svg';
import { DotsPattern } from '@/assets/icons/DotsPattern';
import { Service } from '@/lib/types';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getHotspotImageUrl } from '@/sanity/lib/image';

interface ServicesWeProvideProps {
  data: {
    image?: SanityImageSource;
    services?: Service[];
  };
}

export const ServicesWeProvide = ({ data }: ServicesWeProvideProps) => {
  const { image, services = [] } = data;

  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <img className={s.pattern} src={PatternImg.src} alt='Pattern' />
          <div className={s.header}>
            <h2>
              Services <br />
              We Provide
            </h2>
            <Button href='/services' outline>
              / Everything we do
            </Button>
          </div>
          <div className={s.content}>
            <div className={s.image}>
              <img src={getHotspotImageUrl(image)} alt={'Services'} />
              <DotsPattern />
            </div>
            <div className={s.list}>
              {services.map(
                ({ _id, introSection: { icon, title, shortDescription } }) => (
                  <div
                    // href={`/services/${slug.current}`}
                    className={s.block}
                    key={_id}
                  >
                    <img src={icon} alt={title} />
                    <h6>{title}</h6>
                    <p>{shortDescription}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

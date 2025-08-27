import s from './style.module.scss';
import { Container } from '@/components/Container';
import { BlockContent } from '@/components/Block';
import { getHotspotImageUrl } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

type Props = {
  title?: string;
  subTitle?: string;
  industries?: string;
  serviceType?: string;
  techStack?: string;
  body?: string;
  mainImage?: SanityImageSource;
};

export const PrimarySection = ({
  title,
  subTitle,
  industries,
  serviceType,
  techStack,
  body,
  mainImage,
}: Props) => {
  return (
    <section>
      <Container className={s.wrapper}>
        <div className={s.info}>
          <h1>{title}</h1>
          <div className={s.detail}>
            <div className={s.detailItem}>
              <span>Industries</span>
              {industries}
            </div>
            <div className={s.detailItem}>
              <span>Service type</span>
              {serviceType}
            </div>
            <div className={s.detailItem}>
              <span>Tech stack</span>
              {techStack}
            </div>
          </div>
        </div>
        <div className={s.body}>
          <h1>{subTitle}</h1>
          <BlockContent content={body} />
        </div>
        <img
          className={s.mainImage}
          src={getHotspotImageUrl(mainImage)}
          alt={title}
        />
      </Container>
    </section>
  );
};

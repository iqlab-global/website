import s from './style.module.scss';
import { Container } from '@/components/Container';
import { getHotspotImageUrl } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Pattern from '@/assets/images/textures/pattern-6.svg';

interface Category {
  title: string;
}

interface Author {
  name: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  publishedAt?: string;
  categories?: Category[];
  author?: Author;
  mainImage?: SanityImageSource;
}

export const PostPrimarySection = ({
  title,
  subtitle,
  publishedAt,
  categories,
  author,
  mainImage,
}: Props) => {
  const mainImageUrl = mainImage ? getHotspotImageUrl(mainImage) : '';

  return (
    <section>
      <Container className={s.wrapper}>
        <div className={s.info}>
          <h1>{title}</h1>
          <div className={s.detail}>
            {publishedAt && (
              <div className={s.detailItem}>
                <span>Published</span>
                {new Date(publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            )}
            {categories && categories.length > 0 && (
              <div className={s.detailItem}>
                <span>Categories</span>
                {categories.map((cat) => cat.title).join(', ')}
              </div>
            )}
            {author && (
              <div className={s.detailItem}>
                <span>Author</span>
                {author.name}
              </div>
            )}
          </div>
          {subtitle && <p className={s.subtitle}>{subtitle}</p>}
          {mainImageUrl && (
            <div className={s.image}>
              <img className={s.pattern} src={Pattern.src} alt='Pattern' />
              <img className={s.main} src={mainImageUrl} alt={title} />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

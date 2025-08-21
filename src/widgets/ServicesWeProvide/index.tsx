import s from './style.module.scss';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import PatternImg from '@/assets/images/pattern.svg';
import ServicesImg from '@/assets/images/services.jpg';
import { DotsPattern } from '@/assets/icons/DotsPattern';
import { Service } from '@/lib/types';

interface ServicesWeProvideProps {
  data: Service[];
}

export const ServicesWeProvide = ({ data }: ServicesWeProvideProps) => {
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
              <img src={ServicesImg.src} alt='Services' />
              <DotsPattern />
            </div>
            <div className={s.list}>
              {data.map(
                ({ _id, introSection: { icon, slug, title, description } }) => (
                  <a
                    href={`/services/${slug.current}`}
                    className={s.block}
                    key={_id}
                  >
                    <img src={icon} alt={title} />
                    <h6>{title}</h6>
                    <p>{description}</p>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

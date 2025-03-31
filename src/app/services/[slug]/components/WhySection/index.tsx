import s from './style.module.scss';
import { Container } from '@/components/Container';
import Pattern from '@/assets/images/textures/pattern-4.svg';
import { BlockContent } from '@/components/Block';

type Area = {
  title: string;
  description: string;
  icon: string;
};

type Props = {
  image?: string;
  icon?: string;
  body?: string;
  areas?: Area[];
};

export const WhySection = ({ image, icon, body, areas }: Props) => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.image}>
            <img className={s.icon} src={icon} alt='Icon' />
            <img className={s.pattern} src={Pattern.src} alt='Pattern' />
            <img className={s.mainImage} src={image} alt='Services' />
          </div>
          <div className={s.info}>
            <BlockContent content={body} />
          </div>
        </div>
        <div className={s.areas}>
          {areas?.map((area) => (
            <div key={area.title} className={s.area}>
              <div>
                <img src={area.icon} alt={area.title} />
                <h5>{area.title}</h5>
                <p>{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

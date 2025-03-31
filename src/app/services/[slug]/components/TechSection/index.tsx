import s from './style.module.scss';
import { Container } from '@/components/Container';

type Tech = {
  url: string;
  icon: string;
  alt: string;
};

type Props = {
  data: Tech[];
};

export const TechSection = async ({ data }: Props) => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.tech}>
            {data.slice(0, 6).map(({ url, icon, alt }) => (
              <a key={alt} href={url} target='_blank'>
                <img src={icon} alt={alt} />
              </a>
            ))}
          </div>
          <div className={s.info}>
            <h3>Case Studies</h3>
            <h2>What Technologies Do We Use?</h2>
            <p>
              Powerful and secure solutions built with the latest technologies
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

import s from './style.module.scss';
import { Container } from '@/components/Container';
import HeroBg from '@/assets/images/hero.png';
import ProjectsBg from '@/assets/images/projects.png';
import { Button } from '@/components/Button';

interface HeroProps {
  data: {
    title: string;
    paragraph: string;
    ctaButtonText: string;
    ctaButtonUrl: string;
    servicesButtonText: string;
    servicesButtonUrl: string;
  };
}

export const Hero = ({
  data: { title, paragraph, ctaButtonText, ctaButtonUrl, servicesButtonUrl, servicesButtonText },
}: HeroProps) => {
  return (
    <section className={s.hero} style={{ backgroundImage: `url(${HeroBg.src})` }}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.content}>
            <h1>{title}</h1>
            <p>{paragraph}</p>
            <div className={s.footer}>
              <Button href={ctaButtonUrl}>{ctaButtonText}</Button>
              <a href={servicesButtonUrl} className={s.ourServices}>
                {servicesButtonText} ↗
              </a>
            </div>
            {/*TODO: Discour our projects block here*/}
          </div>
        </div>
      </Container>
    </section>
  );
};

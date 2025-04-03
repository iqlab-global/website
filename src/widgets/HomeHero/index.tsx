import s from './style.module.scss';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { DiscoverArrow } from '@/assets/icons/DiscoverArrow';

interface HeroProps {
  data: {
    title: string;
    paragraph: string;
    ctaButtonText: string;
    ctaButtonUrl: string;
    servicesButtonText: string;
    servicesButtonUrl: string;
    recentProject: {
      primarySection: {
        slug: { current: string };
        image: string;
      };
    };
  };
}

export const Hero = ({
  data: {
    title,
    paragraph,
    ctaButtonText,
    ctaButtonUrl,
    servicesButtonUrl,
    servicesButtonText,
    recentProject,
  },
}: HeroProps) => {
  const { primarySection: project } = recentProject ?? {};

  return (
    <section className={s.hero}>
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
          </div>
          {project && (
            <a className={s.project} href={`/showcase/${project.slug.current}`}>
              <div className={s.projectText}>
                Discover our
                <br />
                recent project
                <DiscoverArrow />
              </div>
              <img src={project.image} alt='Recent Project' />
            </a>
          )}
        </div>
      </Container>
    </section>
  );
};

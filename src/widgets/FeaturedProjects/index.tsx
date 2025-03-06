import s from './style.module.scss';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { clsx } from 'clsx';

interface FeaturedProjectsProps {
  data: {
    _id: string;
    title: string;
    slug: string;
    image: string;
    shortDescription: string;
    tags: { title: string }[];
  }[];
}

export const FeaturedProjects = ({ data }: FeaturedProjectsProps) => {
  // TODO: Dots background
  // TODO: Mobile '/ ALL PROJECTS' button
  // TODO: Short description of project block might need some kind of shortening function for dots (...) at the end

  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.header}>
            <h2>Featured Projects</h2>
            <Button transparentBg outline>
              / All Projects
            </Button>
          </div>
          <div className={s.list}>
            <div className={clsx(s.block, s.mainBlock)}>
              <img src={data[0].image} alt={data[0].title} />
              <h6>{data[0].title}</h6>
              <div className={s.tags}>
                {data[0].tags.map(({ title }: { title: string }) => (
                  <span key={title}>{title}</span>
                ))}
              </div>
              <p>{data[0].shortDescription}</p>
            </div>
            <div className={s.secondaryList}>
              {data.slice(-2).map(({ title, image, shortDescription, tags }) => (
                <div className={s.block} key={title}>
                  <img src={image} alt={title} />
                  <h6>{title}</h6>
                  <div className={s.tags}>
                    {tags.map(({ title }: { title: string }) => (
                      <span key={title}>{title}</span>
                    ))}
                  </div>
                  <p>{shortDescription}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

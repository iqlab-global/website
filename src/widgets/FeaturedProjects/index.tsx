import s from './style.module.scss';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Project } from '@/lib/types';
import { clsx } from 'clsx';

interface FeaturedProjectsProps {
  data: Project[];
}

export const FeaturedProjects = ({ data }: FeaturedProjectsProps) => {
  const {
    primarySection: {
      title,
      subTitle,
      previewImage,
      industries,
      serviceType,
      techStack,
    },
  } = data[0];
  // TODO: Dots background
  // TODO: Mobile '/ ALL PROJECTS' button
  // TODO: Short description of project block might need some kind of shortening function for dots (...) at the end

  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.header}>
            <h2>Featured Projects</h2>
            <Button href='/showcase' transparentBg outline>
              / All Projects
            </Button>
          </div>
          <div className={s.list}>
            <div className={clsx(s.block, s.mainBlock)}>
              <div className={s.imageWrapper}>
                <img src={previewImage} alt={title} />
              </div>
              <h6>{title}</h6>
              <div className={s.industry}>{industries}</div>
              <div className={s.tags}>
                <span>{serviceType}</span>
                <span>{techStack}</span>
              </div>
              <p>{subTitle}</p>
            </div>
            <div className={s.secondaryList}>
              {data
                .slice(1)
                .map(
                  ({
                    _id,
                    primarySection: {
                      title,
                      slug,
                      subTitle,
                      previewImage,
                      industries,
                      serviceType,
                      techStack,
                    },
                  }) => (
                    <a
                      className={s.block}
                      key={_id}
                      href={`/projects/${slug.current}`}
                    >
                      <div className={s.imageWrapper}>
                        <img src={previewImage} alt={title} />
                      </div>
                      <h6>{title}</h6>
                      <div className={s.industry}>{industries}</div>
                      <div className={s.tags}>
                        <span>{serviceType}</span>
                        <span>{techStack}</span>
                      </div>
                      <p>{subTitle}</p>
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

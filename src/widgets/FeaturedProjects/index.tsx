import s from './style.module.scss';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { clsx } from 'clsx';

type Project = {
  _id: string;
  primarySection: {
    title: string;
    subTitle: string;
    slug: string;
    industries: string;
    serviceType: string;
    techStack: string;
    previewImage: string;
  };
};

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
              <img src={previewImage} alt={title} />
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
                      subTitle,
                      previewImage,
                      industries,
                      serviceType,
                      techStack,
                    },
                  }) => (
                    <div className={s.block} key={_id}>
                      <img src={previewImage} alt={title} />
                      <h6>{title}</h6>
                      <div className={s.industry}>{industries}</div>
                      <div className={s.tags}>
                        <span>{serviceType}</span>
                        <span>{techStack}</span>
                      </div>
                      <p>{subTitle}</p>
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

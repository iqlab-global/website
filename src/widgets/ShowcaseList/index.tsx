import s from './style.module.scss';
import { Container } from '@/components/Container';
import { Project } from '@/lib/types';

type Props = {
  projects: Project[];
};

export const ShowcaseList = ({ projects }: Props) => {
  // TODO: Short description of showcase block might need some kind of shortening function for dots (...) at the end

  return (
    <section className={s.section}>
      <Container>
        <div className={s.list}>
          {projects.map(({ _id, primarySection: project }) => (
            <a
              className={s.block}
              key={_id}
              href={`/projects/${project.slug.current}`}
            >
              <div className={s.imageWrapper}>
                <img src={project.previewImage} alt={project.title} />
              </div>
              <h5>{project.title}</h5>
              <div className={s.industry}>{project.industries}</div>
              <div className={s.tags}>
                <span>{project.serviceType}</span>
                <span>{project.techStack}</span>
              </div>
              <p>{project.subTitle}</p>
            </a>
          ))}
        </div>
        {/*TODO: Add load more button component here.*/}
      </Container>
    </section>
  );
};

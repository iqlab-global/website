import s from './style.module.scss';
import { Container } from '@/components/Container';
import Pattern from '@/assets/images/textures/pattern-2.svg';
import { Project } from '@/lib/types';
import { ProjectBlock } from '@/widgets/ProjectBlock';

type Props = {
  title?: string;
  description?: string;
  projects?: Project[];
};

export const CaseStudiesSection = ({
  title,
  description,
  projects = [],
}: Props) => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.info}>
            <h3>Case Studies</h3>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={Pattern.src} alt='Pattern' />
          </div>
          <div className={s.projects}>
            {projects.map((p) => (
              <ProjectBlock key={p._id} {...p} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

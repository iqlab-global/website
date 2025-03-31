import s from './style.module.scss';
import { Container } from '@/components/Container';
import { Project } from '@/lib/types';
import { ProjectBlock } from '@/widgets/ProjectBlock';

type Props = {
  projects: Project[];
};

export const ShowcaseList = ({ projects }: Props) => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.list}>
          {projects.map((p) => (
            <ProjectBlock key={p._id} {...p} firstLarge />
          ))}
        </div>
      </Container>
    </section>
  );
};

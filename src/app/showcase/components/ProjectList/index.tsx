'use client';

import s from './style.module.scss';
import { Container } from '@/components/Container';
import { Project } from '@/lib/types';
import { ProjectBlock } from '@/widgets/ProjectBlock';
import { useGetProjects } from '@/app/showcase/components/ProjectList/hooks';

type Props = {
  projects: Project[];
  total: number;
};

export const ProjectList = (props: Props) => {
  const { projects, total, loading, onFetchMore } = useGetProjects(props);

  return (
    <section className={s.section}>
      <Container>
        <div className={s.list}>
          {projects.map((p) => (
            <ProjectBlock key={p._id} {...p} firstLarge />
          ))}
        </div>
        {projects.length < total && (
          <button className={s.showMore} onClick={onFetchMore}>
            {loading ? 'Loading...' : '/ Show more'}
          </button>
        )}
      </Container>
    </section>
  );
};

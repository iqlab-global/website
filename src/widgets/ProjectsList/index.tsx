'use client';

import s from './style.module.scss';
import { Container } from '@/components/Container';
import { Project, Post } from '@/lib/types';
import { ProjectBlock } from '@/widgets/ProjectBlock';
import { useGetProjects } from './hooks';

type Props = {
  projects: (Project | Post)[];
  total: number;
  apiEndpoint?: string;
};

export const ProjectsList = (props: Props) => {
  const { apiEndpoint = '/api/projects' } = props;
  const { projects, total, loading, onFetchMore } = useGetProjects({
    ...props,
    apiEndpoint,
  });

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

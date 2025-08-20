'use client';

import s from './style.module.scss';
import { Container } from '@/components/Container';
import { Project } from '@/lib/types';
import { ProjectBlock } from '@/widgets/ProjectBlock';
import { useCallback, useEffect, useRef, useState } from 'react';

export const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const totalRef = useRef(0);

  const fetchProjects = useCallback(async (lastId = '') => {
    try {
      const response = await fetch(`/api/projects?lastId=${lastId}`, {
        method: 'GET',
      });

      const { projects, total } = await response.json();

      if (response.ok) {
        totalRef.current = total;
        setProjects((prevProjects) => [...prevProjects, ...projects]);
      }
    } catch (e) {
      console.log(`Error: ${(e as Error).message}`);
    }
  }, []);

  const handleShowMore = useCallback(() => {
    const lastId = projects[projects.length - 1]?._id;
    if (projects.length < totalRef.current && lastId) fetchProjects(lastId);
  }, [projects, fetchProjects]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <section className={s.section}>
      <Container>
        <div className={s.list}>
          {projects.map((p) => (
            <ProjectBlock key={p._id} {...p} firstLarge />
          ))}
        </div>
        {projects.length < totalRef.current && (
          <button className={s.showMore} onClick={handleShowMore}>
            / Show more
          </button>
        )}
      </Container>
    </section>
  );
};

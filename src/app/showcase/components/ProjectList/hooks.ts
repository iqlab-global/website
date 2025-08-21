import { useCallback, useRef, useState } from 'react';
import { Project } from '@/lib/types';

interface Props {
  projects: Project[];
  total: number;
}

export function useGetProjects({ projects: initialProjects, total }: Props) {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const totalRef = useRef(total);

  const fetchProjects = useCallback(async (lastId = '') => {
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  }, []);

  const onFetchMore = useCallback(() => {
    const lastId = projects[projects.length - 1]?._id;
    if (projects.length < totalRef.current && lastId) fetchProjects(lastId);
  }, [projects, fetchProjects]);

  return {
    projects,
    total: totalRef.current,
    onFetchMore,
    loading,
  };
}

import { useCallback, useRef, useState } from 'react';
import { Project } from '@/lib/types';

interface Props {
  projects: Project[];
  total: number;
}

export function useGetProjects({ projects: initialProjects, total }: Props) {
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const totalRef = useRef(total);

  const fetchProjects = useCallback(async (page: number) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/projects?page=${page}`, {
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
    if (projects.length < totalRef.current) {
      fetchProjects(page);
      setPage(page + 1);
    }
  }, [projects, fetchProjects, page, setPage]);

  return {
    projects,
    total: totalRef.current,
    onFetchMore,
    loading,
  };
}

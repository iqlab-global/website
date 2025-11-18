import { useCallback, useRef, useState } from 'react';
import { Project, Post } from '@/lib/types';

interface Props {
  projects: (Project | Post)[];
  total: number;
  apiEndpoint: string;
}

export function useGetProjects({ projects: initialProjects, total, apiEndpoint }: Props) {
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState<(Project | Post)[]>(initialProjects);
  const totalRef = useRef(total);

  const fetchProjects = useCallback(
    async (page: number) => {
      try {
        setLoading(true);
        const response = await fetch(`${apiEndpoint}?page=${page}`, {
          method: 'GET',
        });

        const data = await response.json();
        const items = data.projects || data.posts || [];
        const count = data.total || 0;

        if (response.ok) {
          totalRef.current = count;
          setProjects((prevProjects) => [...prevProjects, ...items]);
        }
      } catch (e) {
        console.log(`Error: ${(e as Error).message}`);
      } finally {
        setLoading(false);
      }
    },
    [apiEndpoint]
  );

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

import { useCallback, useRef, useState } from 'react';
import { Post } from '@/lib/types';

interface Props {
  posts: Post[];
  total?: number;
}

export function useGetPosts({ posts: initialPosts, total }: Props) {
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const totalRef = useRef(total ?? 0);

  const fetchPosts = useCallback(async (page: number) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/posts?page=${page}`, {
        method: 'GET',
      });

      const { posts, total } = await response.json();

      if (response.ok) {
        totalRef.current = total;
        setPosts((prev) => [...prev, ...posts]);
      }
    } catch (e) {
      console.log(`Error: ${(e as Error).message}`);
    } finally {
      setLoading(false);
    }
  }, []);

  const onFetchMore = useCallback(() => {
    if (posts.length < totalRef.current) {
      fetchPosts(page);
      setPage(page + 1);
    }
  }, [posts, fetchPosts, page, setPage]);

  return {
    posts,
    total: totalRef.current,
    onFetchMore,
    loading,
  };
}

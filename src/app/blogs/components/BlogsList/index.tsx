'use client';

import s from './style.module.scss';
import { Container } from '@/components/Container';
import { useState } from 'react';
import { POSTS_PER_PAGE } from '@/constants/posts';
import { Post } from '@/lib/types';
import { BlogCard } from './BlogCard';

interface Props {
  posts: Post[];
  total: number;
}

export const BlogsList = ({ posts: initialPosts, total }: Props) => {
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(POSTS_PER_PAGE);

  const onFetchMore = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/posts?offset=${offset}&limit=${POSTS_PER_PAGE}`);
      const newPosts = await response.json();
      setPosts([...posts, ...newPosts]);
      setOffset(offset + POSTS_PER_PAGE);
    } catch (error) {
      console.error('Error fetching more posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={s.section}>
      <div className={s.postsWrapper}>
        <div className={s.desktopGrid}>
          {(() => {
            const rows: Post[][] = [];
            for (let i = 0; i < posts.length; i += 3) {
              rows.push(posts.slice(i, i + 3));
            }
            return rows.map((row, rowIndex) => (
              <div key={rowIndex}>
                <Container>
                  <div className={s.grid}>
                    {row.map((post) => (
                      <BlogCard key={post._id} post={post} />
                    ))}
                  </div>
                </Container>
                {rowIndex < rows.length - 1 && <div className={s.divider} />}
              </div>
            ));
          })()}
        </div>

        <div className={s.mobileGrid}>
          {posts.map((post, index) => (
            <div key={post._id}>
              <Container>
                <BlogCard post={post} />
              </Container>
              {index < posts.length - 1 && <div className={s.divider} />}
            </div>
          ))}
        </div>
      </div>
      {posts.length < total && (
        <Container>
          <button className={s.showMore} onClick={onFetchMore} disabled={loading}>
            {loading ? 'Loading...' : '/ SHOW MORE'}
          </button>
        </Container>
      )}
    </section>
  );
};

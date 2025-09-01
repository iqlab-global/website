'use client';

import s from './style.module.scss';
import { Container } from '@/components/Container';
import { Post } from '@/lib/types';
import { PostBlock } from '@/widgets/PostBlock';
import { useGetPosts } from '@/app/blog/components/PostsList/hooks';

type Props = {
  posts: Post[];
  total?: number;
};

export const PostsList = (props: Props) => {
  const { posts, total, loading, onFetchMore } = useGetPosts(props);

  return (
    <section className={s.section}>
      <Container>
        <div className={s.list}>
          {posts.map((p) => (
            <PostBlock key={p._id} {...p} />
          ))}
        </div>
        {posts.length < total && (
          <button className={s.showMore} onClick={onFetchMore}>
            {loading ? 'Loading...' : '/ Show more'}
          </button>
        )}
      </Container>
    </section>
  );
};

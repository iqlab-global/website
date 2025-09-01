import s from './style.module.scss';
import { Post } from '@/lib/types';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { PostBlock } from '@/widgets/PostBlock';

interface InsightsInspirationProps {
  posts: Post[];
}

export const InsightsInspiration = ({ posts }: InsightsInspirationProps) => {
  return (
    <section className={s.section}>
      <Container className={s.container}>
        <div className={s.head}>
          <h2>Insights & Inspiration</h2>
          <Button className={s.showMore} href='/blog' outline>
            / Show more
          </Button>
        </div>
        <div className={s.list}>
          {posts.map((p) => (
            <PostBlock key={p._id} {...p} />
          ))}
        </div>
        <Button className={s.showMoreMobile} href='/blog' outline>
          / Show more
        </Button>
      </Container>
    </section>
  );
};

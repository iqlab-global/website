import s from './style.module.scss';
import { Container } from '@/components/Container';
import { Post } from '@/lib/types';
import { BlogCard } from '@/app/blogs/components/BlogsList/BlogCard';
import { Button } from '@/components/Button';
import { Fragment } from 'react';

interface Props {
  posts?: Post[];
  backLink?: string;
  backLinkText?: string;
  heading?: string;
  description?: string;
}

export const NextPostsSection = ({
  posts = [],
  backLink = '/blogs',
  backLinkText = '/ back to archive',
  heading = 'Next posts',
  description = 'We invite you to explore our blogs covering IT and technological innovations.',
}: Props) => {
  return (
    <section>
      <Container className={s.wrapper}>
        <div className={s.body}>
          <div className={s.info}>
            <h3>{heading}</h3>
            <div>
              <p>{description}</p>
              <Button outline className={s.back} href={backLink}>
                {backLinkText}
              </Button>
            </div>
          </div>
          <div className={s.posts}>
            {posts.map((post, index) => (
              <Fragment key={post._id}>
                <BlogCard post={post} />
                {index < posts.length - 1 && <div className={s.divider} />}
              </Fragment>
            ))}
          </div>
          <Button outline className={s.mobileBack} href={backLink}>
            {backLinkText}
          </Button>
        </div>
      </Container>
    </section>
  );
};

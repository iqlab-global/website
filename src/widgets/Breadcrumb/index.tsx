import s from './style.module.scss';
import { Container } from '@/components/Container';

export const Breadcrumb = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <a href="/">
            <span />
            Home
          </a>
          <span> / </span>
          About
        </div>
      </Container>
    </section>
  );
};

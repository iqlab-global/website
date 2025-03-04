import s from './style.module.scss';
import { Container } from '@/components/Container';
import Link from 'next/link';

interface BreadcrumbProps {
  currentPage: string;
}

export const Breadcrumb = ({ currentPage }: BreadcrumbProps) => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <Link href="/">
            <span />
            Home
          </Link>
          <span> / </span>
          {currentPage}
        </div>
      </Container>
    </section>
  );
};

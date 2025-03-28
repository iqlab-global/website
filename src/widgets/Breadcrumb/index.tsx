import s from './style.module.scss';
import { Container } from '@/components/Container';
import Link from 'next/link';

type Page = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  pages?: Page[];
};

export const Breadcrumb = ({ pages = [] }: BreadcrumbProps) => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <Link className='home' href='/'>
            <span />
            Home
          </Link>
          {pages.slice(0, -1).map(({ label, href }) => (
            <span key={href}>
              <span> / </span>
              <Link href={href ?? ''}>{label}</Link>
            </span>
          ))}
          <span> / </span>
          {pages.at(-1)?.label}
        </div>
      </Container>
    </section>
  );
};

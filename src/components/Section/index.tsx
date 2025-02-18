import s from './style.module.scss';
import { Container } from '@/components/Container';
import { Fragment } from 'react';
import { clsx } from 'clsx';

interface SectionProps {
  title?: string;
  className?: string;
  container?: boolean;
  children: React.ReactNode;
}

export const Section = ({ className, container = true, title, children }: SectionProps) => {
  const ContentWrapper = container ? Container : Fragment;

  return (
    <section className={clsx(s.section, className)}>
      <ContentWrapper>
        {title && <h2>{title}</h2>}
        {children}
      </ContentWrapper>
    </section>
  );
};

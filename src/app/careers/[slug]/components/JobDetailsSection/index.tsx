import s from './style.module.scss';
import { Container } from '@/components/Container';

type Props = {
  title: string;
  items?: string[];
};

export const JobDetailsSection = ({ title, items }: Props) => {
  if (!items || items.length === 0) return null;

  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.title}>{title}</h2>
        <ul className={s.list}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

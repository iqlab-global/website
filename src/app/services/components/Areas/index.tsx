import Link from 'next/link';
import s from './style.module.scss';
import { Container } from '@/components/Container';
import { Service } from '@/lib/types';

type Props = {
  title?: string;
  services?: Service[];
};

export const Areas = ({ title, services }: Props) => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <h2 className={s.title}>{title}</h2>
          <div className={s.list}>
            {services?.map(
              ({ _id, introSection: { icon, title, description, slug } }) => (
                <Link
                  href={`/services/${slug.current}`}
                  className={s.block}
                  key={_id}
                >
                  {icon && <img src={icon} alt={title} />}
                  <h6>{title}</h6>
                  <p>{description}</p>
                </Link>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

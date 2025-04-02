import s from './style.module.scss';

type Props = {
  title?: string;
  description?: string;
};

export const InfoBlock = ({ title, description }: Props) => {
  return (
    <section className={s.section}>
      <h4>{title}</h4>
      <p>{description}</p>
    </section>
  );
};

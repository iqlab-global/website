import s from './style.module.scss';

type Props = {
  title?: string;
  description?: string;
  id?: string;
};

export const InfoBlock = ({ title, description, id }: Props) => {
  return (
    <section id={id} className={s.section}>
      <h4>{title}</h4>
      <p>{description}</p>
    </section>
  );
};

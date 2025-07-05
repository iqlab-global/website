import s from './style.module.scss';

type Props = {
  title?: string;
  description?: string;
  id?: string;
};

export const InfoBlock = ({ title, description, id }: Props) => {
  return (
    <section className={s.section} id={id}>
      <h4>{title}</h4>
      <p>{description}</p>
    </section>
  );
};

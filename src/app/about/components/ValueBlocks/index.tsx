import s from './style.module.scss';

type Value = {
  title?: string;
  description?: string;
};

type Props = {
  values?: Value[];
};

export const ValueBlocks = ({ values }: Props) => {
  return (
    <section className={s.section}>
      {values?.map(({ title, description }) => (
        <div key={title} className={s.block}>
          <div className={s.noise} />
          <h6>{title}</h6>
          <p>{description}</p>
        </div>
      ))}
      {/*TODO: Add dots figure here*/}
    </section>
  );
};

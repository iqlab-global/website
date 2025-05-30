import s from './style.module.scss';
import Pattern from '@/assets/images/textures/pattern-3.svg';

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
      <img className={s.pattern} src={Pattern.src} alt='Pattern' />
      {values?.map(({ title, description }, index) => (
        <div
          key={title}
          className={s.block}
          style={{ backgroundPosition: index % 2 === 0 ? '0' : '100%' }}
        >
          <div className={s.noise} />
          <h6>{title}</h6>
          <p>{description}</p>
        </div>
      ))}
      {/*TODO: Add dots figure here*/}
    </section>
  );
};

import s from './style.module.scss';
import Gradient from '@/assets/images/gradient.png';

export const ValueBlocks = () => {
  return (
    <section className={s.section}>
      <div className={s.block} style={{ backgroundImage: `url('${Gradient.src}')` }}>
        <h6>Excellence .</h6>
        <p>We strive for excellence and aim to meet the highest standards.</p>
      </div>
      <div className={s.block} style={{ backgroundImage: `url('${Gradient.src}')` }}>
        <h6>Excellence .</h6>
        <p>We strive for excellence and aim to meet the highest standards.</p>
      </div>
      <div className={s.block} style={{ backgroundImage: `url('${Gradient.src}')` }}>
        <h6>Excellence .</h6>
        <p>We strive for excellence and aim to meet the highest standards.</p>
      </div>
      <div className={s.block} style={{ backgroundImage: `url('${Gradient.src}')` }}>
        <h6>Excellence .</h6>
        <p>We strive for excellence and aim to meet the highest standards.</p>
      </div>
      <div className={s.block} style={{ backgroundImage: `url('${Gradient.src}')` }}>
        <h6>Excellence .</h6>
        <p>We strive for excellence and aim to meet the highest standards.</p>
      </div>
      {/*TODO: Add dots figure here*/}
    </section>
  );
};

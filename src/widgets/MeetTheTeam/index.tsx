import s from './style.module.scss';
import Image from '@/assets/images/services.jpeg';

export const MeetTheTeam = () => {
  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <div className={s.block}>
          <img src={Image.src} alt='Team member' />
          <h6>Hernan Migel</h6>
          <p>Data Scientist</p>
        </div>
        <div className={s.block}>
          <img src={Image.src} alt='Team member' />
          <h6>Hernan Migel</h6>
          <p>Data Scientist</p>
        </div>
        <div className={s.block}>
          <img src={Image.src} alt='Team member' />
          <h6>Hernan Migel</h6>
          <p>Data Scientist</p>
        </div>
        <div className={s.block}>
          <img src={Image.src} alt='Team member' />
          <h6>Hernan Migel</h6>
          <p>Data Scientist</p>
        </div>
        <div className={s.block}>
          <img src={Image.src} alt='Team member' />
          <h6>Hernan Migel</h6>
          <p>Data Scientist</p>
        </div>
        <div className={s.block}>
          <img src={Image.src} alt='Team member' />
          <h6>Hernan Migel</h6>
          <p>Data Scientist</p>
        </div>
      </div>
    </section>
  );
};

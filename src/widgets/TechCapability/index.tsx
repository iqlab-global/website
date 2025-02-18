import { Section } from '@/components/Section';
import s from './style.module.scss';
import RailsIcon from '@/assets/images/rails.svg';

export const TechCapability = () => {
  return (
    <Section className={s.section} title="Tech Capability">
      {/*TODO: Section component should have a description text option. Refer to Services page in design.*/}

      <div className={s.wrapper}>
        <div className={s.block}>
          <img src={RailsIcon.src} alt="Rails" />
        </div>
        <div className={s.block}>
          <img src={RailsIcon.src} alt="Rails" />
        </div>
        <div className={s.block}>
          <img src={RailsIcon.src} alt="Rails" />
        </div>
        <div className={s.block}>
          <img src={RailsIcon.src} alt="Rails" />
        </div>
        <div className={s.block}>
          <img src={RailsIcon.src} alt="Rails" />
        </div>
        <div className={s.block}>
          <img src={RailsIcon.src} alt="Rails" />
        </div>
        <div className={s.block}>
          <img src={RailsIcon.src} alt="Rails" />
        </div>
        <div className={s.block}>
          <img src={RailsIcon.src} alt="Rails" />
        </div>
      </div>
    </Section>
  );
};

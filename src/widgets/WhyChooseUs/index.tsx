import s from './style.module.scss';
import BrainIcon from '@/assets/images/icons/brain.svg';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';

export const WhyChooseUs = ({ data }: { data: any }) => {
  return (
    <Section title="Why Choose Us">
      <div className={s.wrapper}>
        <div className={s.list}>
          {/*TODO: Mobile slider for blocks*/}
          {/*@ts-ignore*/}
          {data.map(({ description, title }) => (
            <div key={title} className={s.block}>
              <img src={BrainIcon.src} alt="brain" />
              <h6>{title}</h6>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <Button outline={true}>/ learn more</Button>
      </div>
    </Section>
  );
};

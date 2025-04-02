import s from './style.module.scss';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';

interface WhyChooseUsProps {
  data: {
    title: string;
    icon: string;
    description: string;
  }[];
}

export const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  return (
    <Section title='Why Choose Us' className={s.section}>
      <div className={s.wrapper}>
        <div className={s.list}>
          {/*TODO: Mobile slider for blocks*/}
          {data.map(({ icon, description, title }) => (
            <div key={title} className={s.block}>
              <img src={icon} alt={title} />
              <h6>{title}</h6>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <Button outline href='/about'>
          / learn more
        </Button>
      </div>
    </Section>
  );
};

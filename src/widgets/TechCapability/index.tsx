import { Section } from '@/components/Section';
import s from './style.module.scss';

interface TechCapabilityProps {
  data: {
    icon: string;
    alt: string;
  }[];
}

export const TechCapability = async ({ data }: TechCapabilityProps) => {
  return (
    <Section
      className={s.section}
      title='Tech Capability'
      subTitle='Explore our robust technology portfolio, from Ruby on Rails to GraphQL.'
    >
      <div className={s.wrapper}>
        {data.map(({ icon, alt }) => (
          <div key={alt} className={s.block}>
            <img src={icon} alt={alt} />
          </div>
        ))}
      </div>
    </Section>
  );
};

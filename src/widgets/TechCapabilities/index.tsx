import { Section } from '@/components/Section';
import s from './style.module.scss';

type Props = {
  data: {
    url: string;
    icon: string;
    alt: string;
  }[];
};

export const TechCapabilities = async ({ data }: Props) => {
  return (
    <Section
      className={s.section}
      title='Tech Capability'
      subTitle='Explore our robust technology portfolio, from Ruby on Rails to GraphQL.'
    >
      <div className={s.wrapper}>
        {data.map(({ url, icon, alt }) => (
          <a key={alt} className={s.block} href={url} target='_blank'>
            <img src={icon} alt={alt} />
          </a>
        ))}
      </div>
    </Section>
  );
};

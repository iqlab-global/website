import { Section } from '@/components/Section';
import s from './style.module.scss';

type Props = {
  data: {
    url: string;
    iconDark: string;
    iconLight: string;
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
        {data.map(({ url, iconDark, iconLight, alt }) => (
          <a key={alt} className={s.block} href={url} target='_blank'>
            <img className={s.iconDark} src={iconDark} alt={alt} />
            <img className={s.iconLight} src={iconLight} alt={alt} />
          </a>
        ))}
      </div>
    </Section>
  );
};

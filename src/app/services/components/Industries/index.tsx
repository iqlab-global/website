import s from './style.module.scss';
import { Container } from '@/components/Container';
import AppImage from '@/components/AppImage';
import Pattern from '@/assets/images/textures/pattern-2.svg';

import { IndustryCard } from '../IndustryCard';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

type Industry = {
  title: string;
  description: string;
  image: SanityImageSource;
};

type Props = {
  title?: string;
  description?: string;
  industries?: Industry[];
};

export function Industries({ title, description, industries = [] }: Props) {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.patternWrapper}>
            <AppImage className={s.patternImg} src={Pattern} alt='Pattern' />
          </div>
          <div className={s.mainContent}>
            <div className={s.headingWrapper}>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div className={s.serviceCards}>
              {industries.map(({ title, description, image }) => (
                <IndustryCard
                  key={title}
                  title={title}
                  img={image}
                  description={description}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

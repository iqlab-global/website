import s from './style.module.scss';
import { Container } from '@/components/Container';
import Pattern from '@/assets/images/textures/pattern-5.svg';

type Props = {
  title?: string;
  location?: string;
  employmentType?: string;
  experienceLevel?: string;
  description?: string;
};

export const JobIntroSection = ({
  title,
  location,
  employmentType,
  experienceLevel,
  description,
}: Props) => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <h1 className={s.title}>{title}</h1>
          <div className={s.details}>
            {location && (
              <div className={s.detailItem}>
                <span>Location</span>
                <p>{location}</p>
              </div>
            )}
            {employmentType && (
              <div className={s.detailItem}>
                <span>Type</span>
                <p>{employmentType}</p>
              </div>
            )}
            {experienceLevel && (
              <div className={s.detailItem}>
                <span>Experience Level</span>
                <p>{experienceLevel}</p>
              </div>
            )}
          </div>
          {description && <p className={s.description}>{description}</p>}
          <img className={s.pattern} src={Pattern.src} alt='Pattern' />
        </div>
      </Container>
    </section>
  );
};

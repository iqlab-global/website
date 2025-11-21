import s from './style.module.scss';
import { Container } from '@/components/Container';
import Pattern from '@/assets/images/textures/pattern-7.svg';
import { useMemo } from 'react';
import { BlockContent } from '@/components/Block';
import { PortableTextBlock } from '@portabletext/types';

type Props = {
  title?: string;
  location?: string;
  employmentType?: string;
  experienceLevel?: string;
  description?: PortableTextBlock[];
  applicationDeadline?: string;
};

export const JobIntroSection = ({
  title,
  location,
  employmentType,
  experienceLevel,
  description,
  applicationDeadline,
}: Props) => {
  const formattedDate = useMemo(
    () =>
      applicationDeadline &&
      new Date(applicationDeadline).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    [applicationDeadline]
  );

  return (
    <section className={s.section}>
      <Container>
        <div className={s.outerWrapper}>
          <div className={s.wrapper}>
            <h1 className={s.title}>{title}</h1>
            <div className={s.details}>
              <section>
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
              </section>
              <section>
                {experienceLevel && (
                  <div className={s.detailItem}>
                    <span>Experience Level</span>
                    <p>{experienceLevel}</p>
                  </div>
                )}
                {applicationDeadline && (
                  <div className={s.detailItem}>
                    <span>Application Deadline</span>
                    <p>{formattedDate}</p>
                  </div>
                )}
              </section>
            </div>
            <img className={s.pattern} src={Pattern.src} alt='Pattern' />
          </div>
          <div className={s.description}>
            <BlockContent content={description} />
          </div>
          <img className={s.mobilePattern} src={Pattern.src} alt='Pattern' />
        </div>
      </Container>
    </section>
  );
};

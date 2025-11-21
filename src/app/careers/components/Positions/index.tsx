'use client';
import Link from 'next/link';
import s from './style.module.scss';
import { Container } from '@/components/Container';
import { useWindowSize } from '@/hooks/useWindowSize';

type Job = {
  _id: string;
  introSection: {
    title: string;
    slug: { current: string };
    location?: string;
    employmentType?: string;
    experienceLevel?: string;
  };
};

type Props = {
  jobs?: Job[];
};

export const Positions = ({ jobs = [] }: Props) => {
  const { isMobile } = useWindowSize();

  if (jobs.length === 0) {
    return (
      <section>
        <Container>
          <div className={s.wrapper}>
            <h2>All open positions</h2>
            <p className={s.noJobs}>No open positions at the moment. Please check back later!</p>
          </div>
        </Container>
      </section>
    );
  }
  return (
    <section>
      <Container>
        <div className={s.wrapper}>
          <h2>All open positions</h2>
          <div className={s.table}>
            {!isMobile && (
              <table>
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Location</th>
                    <th>Type</th>
                    <th>Experience</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job) => {
                    const { title, slug, location, employmentType, experienceLevel } = job.introSection;
                    return (
                      <tr key={job._id}>
                        <td>
                          <Link href={`/careers/${slug.current}`} className={s.highlighted}>
                            {title}
                          </Link>
                        </td>
                        <td>
                          <Link href={`/careers/${slug.current}`}>
                            {location || '-'}
                          </Link>
                        </td>
                        <td>
                          <Link href={`/careers/${slug.current}`}>
                            {employmentType || '-'}
                          </Link>
                        </td>
                        <td>
                          <Link href={`/careers/${slug.current}`}>
                            {experienceLevel || '-'}
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
            {isMobile && (
              <div className={s.mobileList}>
                {jobs.map((job) => {
                  const { title, slug, location, employmentType, experienceLevel } = job.introSection;
                  return (
                    <Link href={`/careers/${slug.current}`} className={s.block} key={job._id}>
                      <h5>{title}</h5>
                      <div className={s.content}>
                        <div>
                          <span>{location || '-'}</span>
                          <span>{experienceLevel || '-'}</span>
                        </div>
                        <div>
                          <span>{employmentType || '-'}</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

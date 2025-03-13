'use client';
import s from './style.module.scss';
import { Container } from '@/components/Container';
import { useWindowSize } from '@/hooks/useWindowSize';

export const Positions = () => {
  const { isMobile } = useWindowSize();
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
                    <th>Application</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href='#' className={s.highlighted}>
                        Full-Stack Developer
                      </a>
                    </td>
                    <td>
                      <a href='#'>Remote/On-site</a>
                    </td>
                    <td>
                      <a href='#'>Full-time</a>
                    </td>
                    <td>
                      <a href='#'>Mid-Senior Level</a>
                    </td>
                    <td>
                      <a href='#'>November 30, 2024</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href='#' className={s.highlighted}>
                        Full-Stack Developer
                      </a>
                    </td>
                    <td>
                      <a href='#'>Remote/On-site</a>
                    </td>
                    <td>
                      <a href='#'>Full-time</a>
                    </td>
                    <td>
                      <a href='#'>Mid-Senior Level</a>
                    </td>
                    <td>
                      <a href='#'>November 30, 2024</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href='#' className={s.highlighted}>
                        Full-Stack Developer
                      </a>
                    </td>
                    <td>
                      <a href='#'>Remote/On-site</a>
                    </td>
                    <td>
                      <a href='#'>Full-time</a>
                    </td>
                    <td>
                      <a href='#'>Mid-Senior Level</a>
                    </td>
                    <td>
                      <a href='#'>November 30, 2024</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
            {isMobile && (
              <div className={s.mobileList}>
                <a href='#' className={s.block}>
                  <h5>Full-Stack Developer</h5>
                  <div className={s.content}>
                    <div>
                      <span>Remote/On-site</span>
                      <span>Mid-Senior Level</span>
                    </div>
                    <div>
                      <span>Full-time</span>
                      <span>Nov 25, 2024</span>
                    </div>
                  </div>
                </a>
                <a href='#' className={s.block}>
                  <h5>Full-Stack Developer</h5>
                  <div className={s.content}>
                    <div>
                      <span>Remote/On-site</span>
                      <span>Mid-Senior Level</span>
                    </div>
                    <div>
                      <span>Full-time</span>
                      <span>Nov 25, 2024</span>
                    </div>
                  </div>
                </a>
                <a href='#' className={s.block}>
                  <h5>Full-Stack Developer</h5>
                  <div className={s.content}>
                    <div>
                      <span>Remote/On-site</span>
                      <span>Mid-Senior Level</span>
                    </div>
                    <div>
                      <span>Full-time</span>
                      <span>Nov 25, 2024</span>
                    </div>
                  </div>
                </a>
                <a href='#' className={s.block}>
                  <h5>Full-Stack Developer</h5>
                  <div className={s.content}>
                    <div>
                      <span>Remote/On-site</span>
                      <span>Mid-Senior Level</span>
                    </div>
                    <div>
                      <span>Full-time</span>
                      <span>Nov 25, 2024</span>
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

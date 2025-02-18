import s from './style.module.scss';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import ServicesImg from '@/assets/images/services.jpeg';
import { clsx } from 'clsx';

export const FeaturedProjects = () => {
  // TODO: Dots background
  // TODO: Mobile '/ ALL PROJECTS' button
  // TODO: Short description of project block might need some kind of shortening function for dots (...) at the end

  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.header}>
            <h2>Featured Projects</h2>
            <Button transparentBg outline>
              / All Projects
            </Button>
          </div>
          <div className={s.list}>
            <div className={clsx(s.block, s.mainBlock)}>
              <img src={ServicesImg.src} alt="Services" />
              <h6>On Performance Optimizations for Displaying Large Structures</h6>
              <div className={s.tags}>
                <span>Digital transformation</span>
                <span>MySQL</span>
              </div>
              <p>
                In modern applications, particularly within medium to large companies, efficiently handling
                vast amounts of da...
              </p>
            </div>
            <div className={s.secondaryList}>
              <div className={s.block}>
                <img src={ServicesImg.src} alt="Services" />
                <h6>API v2 with JSON:API: Streamlined Data Exchange for Graph-Based Applications</h6>
                <div className={s.tags}>
                  <span>Digital transformation</span>
                  <span>MySQL</span>
                </div>
                <p>
                  In modern applications, particularly within medium to large companies, efficiently handling
                  vast amounts of da...
                </p>
              </div>
              <div className={s.block}>
                <img src={ServicesImg.src} alt="Services" />
                <h6>On Performance Optimizations for Displaying Large Structures</h6>
                <div className={s.tags}>
                  <span>Digital transformation</span>
                  <span>MySQL</span>
                </div>
                <p>
                  In modern applications, particularly within medium to large companies, efficiently handling
                  vast amounts of da...
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

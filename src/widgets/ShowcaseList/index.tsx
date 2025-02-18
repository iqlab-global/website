import s from './style.module.scss';
import { Container } from '@/components/Container';
import ShowcaseImg from '@/assets/images/services.jpeg';

export const ShowcaseList = () => {
  // TODO: Short description of showcase block might need some kind of shortening function for dots (...) at the end

  return (
    <section className={s.section}>
      <Container>
        <div className={s.list}>
          <div className={s.block}>
            <img src={ShowcaseImg.src} alt="Showcase" />
            <h5>API v2 with JSON:API: Streamlined Data Exchange for Graph-Based Applications</h5>
            <div className={s.tags}>
              <span>API</span>
              <span>JSON</span>
              <span>API</span>
            </div>
            <p>API v2 serves as a robust implementation of the JSON:API...</p>
          </div>
          <div className={s.block}>
            <img src={ShowcaseImg.src} alt="Showcase" />
            <h5>API v2 with JSON:API: Streamlined Data Exchange for Graph-Based Applications</h5>
            <div className={s.tags}>
              <span>API</span>
              <span>JSON</span>
              <span>API</span>
            </div>
            <p>API v2 serves as a robust implementation of the JSON:API...</p>
          </div>
          <div className={s.block}>
            <img src={ShowcaseImg.src} alt="Showcase" />
            <h5>API v2 with JSON:API: Streamlined Data Exchange for Graph-Based Applications</h5>
            <div className={s.tags}>
              <span>API</span>
              <span>JSON</span>
              <span>API</span>
            </div>
            <p>API v2 serves as a robust implementation of the JSON:API...</p>
          </div>
          <div className={s.block}>
            <img src={ShowcaseImg.src} alt="Showcase" />
            <h5>API v2 with JSON:API: Streamlined Data Exchange for Graph-Based Applications</h5>
            <div className={s.tags}>
              <span>API</span>
              <span>JSON</span>
              <span>API</span>
            </div>
            <p>API v2 serves as a robust implementation of the JSON:API...</p>
          </div>
          <div className={s.block}>
            <img src={ShowcaseImg.src} alt="Showcase" />
            <h5>API v2 with JSON:API: Streamlined Data Exchange for Graph-Based Applications</h5>
            <div className={s.tags}>
              <span>API</span>
              <span>JSON</span>
              <span>API</span>
            </div>
            <p>API v2 serves as a robust implementation of the JSON:API...</p>
          </div>
          <div className={s.block}>
            <img src={ShowcaseImg.src} alt="Showcase" />
            <h5>API v2 with JSON:API: Streamlined Data Exchange for Graph-Based Applications</h5>
            <div className={s.tags}>
              <span>API</span>
              <span>JSON</span>
              <span>API</span>
            </div>
            <p>API v2 serves as a robust implementation of the JSON:API...</p>
          </div>
        </div>
        {/*TODO: Add load more button component here.*/}
      </Container>
    </section>
  );
};

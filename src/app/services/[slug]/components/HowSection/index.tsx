import s from './style.module.scss';
import { Container } from '@/components/Container';
import Pattern from '@/assets/images/textures/pattern-5.svg';
import { sortBy } from '@/lib/utils';

type HowItem = {
  title: string;
  description: string;
  order: string;
};

type Props = {
  data?: HowItem[];
};

export const HowSection = ({ data }: Props) => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <div>
            <h3>Our Approach</h3>
            <h2>How Do We Work for You?</h2>
          </div>
          <div>
            <p>
              Excellence at every step:
              <br />
              The development stages of your software.
            </p>
          </div>
        </div>
        <img src={Pattern.src} alt='Pattern' />
        <div className={s.items}>
          {data?.sort(sortBy('order'))?.map((item, index) => (
            <div key={item.title} className={s.item}>
              <div>
                <h5>
                  0{index + 1}.
                  <br />
                  {item.title}
                </h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

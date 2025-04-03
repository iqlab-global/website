import s from './style.module.scss';
import { Container } from '@/components/Container';
import Pattern from '@/assets/images/textures/pattern-1.svg';
import { TestimonialCard } from './components/TestimonialCard';
import AppImage from '@/components/AppImage';

interface TestimonialsProps {
  data: {
    companyName: string;
    description: string;
  }[];
}

export default function Testimonials({ data }: TestimonialsProps) {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.headingAndPattern}>
            <h2>Client Testimonials</h2>
            <AppImage className={s.pattern} src={Pattern} alt='Pattern Image' />
          </div>
          <div className={s.testimonials}>
            {data.map(({ description, companyName }, index: number) => (
              <TestimonialCard
                key={companyName}
                order={index + 1}
                personName={companyName}
                text={description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

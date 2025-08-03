import s from './style.module.scss';

interface TestimonialCardProps {
  order: number;
  text: string;
  personName: string;
}

export const TestimonialCard = ({
  order,
  text,
  personName,
}: TestimonialCardProps) => {
  return (
    <div className={s.testimonial}>
      <div className={s.order}>
        <p>{String(order).padStart(2, '0')}/</p>
        <span />
      </div>
      <p className={s.text}>{text}</p>
      <p className={s.personName}>{personName}</p>
    </div>
  );
};

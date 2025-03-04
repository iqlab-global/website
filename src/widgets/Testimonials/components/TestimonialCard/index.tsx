import s from './style.module.scss';

interface TestimonialCardProps {
  order: number;
  text: string;
  personName: string;
}

export const TestimonialCard = ({ order, text, personName }: TestimonialCardProps) => {
  return (
    <div className={s.testimonial}>
      <div className={s.order}>
        <p>
          {order.toString().length === 1 ? 0 : ''}
          {order}/
        </p>
        <span />
      </div>
      <p className={s.text}>{`"${text}"`}</p>
      <p className={s.personName}>{personName}</p>
    </div>
  );
};

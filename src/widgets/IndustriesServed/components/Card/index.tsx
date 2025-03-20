import s from './style.module.scss';

interface CardProps {
  title: string;
  description: string;
  img: string;
}

export const Card = ({ title, description, img }: CardProps) => {
  return (
    <div className={s.serviceCardWrapper}>
      <img className={s.industryImage} src={img} alt={title} />
      <div className={s.textWrapper}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

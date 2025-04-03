import s from './style.module.scss';

type Member = {
  image?: string;
  name?: string;
  position?: string;
};

type Props = {
  members?: Member[];
};

export const MeetTheTeam = ({ members }: Props) => {
  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        {members?.map(({ image, name, position }) => (
          <div key={name} className={s.block}>
            <img src={image} alt='Team member' />
            <h6>{name}</h6>
            <p>{position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

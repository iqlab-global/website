import { Container } from '@/components/Container';
import s from './style.module.scss';
import { LocationIcon } from '@/assets/icons/LocationIcon';
import { StarIcon } from '@/assets/icons/StarIcon';
import { TimeIcon } from '@/assets/icons/TimeIcon';

export const CompanyCulture = () => {
  const data = [
    {
      id: 1,
      icon: <LocationIcon />,
      title: 'Work From Anywhere',
      text: 'Your workspace, your choice. Be a digital nomad if you like!',
    },
    {
      id: 2,
      icon: <StarIcon />,
      title: 'Team Up with the Best',
      text: 'Join forces with the top 1% of professionals in your field.',
    },
    {
      id: 3,
      icon: <TimeIcon />,
      title: 'Flexible Schedules',
      text: 'Claim your autonomy. Set your own schedule.',
    },
    {
      id: 4,
      icon: <LocationIcon />,
      title: 'Vacations & Holidays',
      text: 'Refresh with 2 weeks of paid vacation and get all your local holidays off.',
    },
  ];

  return (
    <section>
      <Container>
        <div className={s.wrapper}>
          <div className={s.content}>
            <h2 className={s.title}>Company Culture</h2>
            <p className={s.paragraph}>
              Join a company where new ideas are always welcome. Together, let’s
              drive innovation and redefine the tech landscape.
            </p>
          </div>
          <div className={s.cards}>
            {data.map((item) => (
              <div key={item.id} className={s.card}>
                <span>{item.icon}</span>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

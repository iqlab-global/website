import s from './style.module.scss';
import { Container } from '@/components/Container';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getHotspotImageUrl } from '@/sanity/lib/image';

type CultureItem = {
  icon?: SanityImageSource;
  title?: string;
  description?: string;
};

type Props = {
  description?: string;
  cultureItems?: CultureItem[];
};

export const CompanyCulture = ({ description, cultureItems }: Props) => {
  const defaultDescription =
    'Join a company where new ideas are always welcome. Together, let’s drive innovation and redefine the tech landscape.';

  const defaultItems: CultureItem[] = [
    {
      title: 'Work From Anywhere',
      description:
        'Your workspace, your choice. Be a digital nomad if you like!',
    },
    {
      title: 'Team Up with the Best',
      description:
        'Join forces with the top 1% of professionals in your field.',
    },
    {
      title: 'Flexible Schedules',
      description: 'Claim your autonomy. Set your own schedule.',
    },
    {
      title: 'Vacations & Holidays',
      description:
        'Refresh with 2 weeks of paid vacation and get all your local holidays off.',
    },
  ];

  const items =
    cultureItems && cultureItems.length > 0 ? cultureItems : defaultItems;

  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.header}>
            <h2 className={s.title}>Company Culture</h2>
            <p className={s.description}>{description || defaultDescription}</p>
          </div>

          <div className={s.grid}>
            {items.map((item, index) => {
              const iconUrl = item.icon ? getHotspotImageUrl(item.icon) : null;

              return (
                <div key={index} className={s.item}>
                  {iconUrl && (
                    <div className={s.iconWrapper}>
                      <img
                        src={iconUrl}
                        alt={item.title || ''}
                        className={s.icon}
                      />
                    </div>
                  )}
                  {item.title && <h3 className={s.itemTitle}>{item.title}</h3>}
                  {item.description && (
                    <p className={s.itemDescription}>{item.description}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

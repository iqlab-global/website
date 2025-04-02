import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { AboutCta } from '@/widgets/AboutCta';
import s from './style.module.scss';
import { Container } from '@/components/Container';
import { InfoBlock } from '@/app/about/components/InfoBlock';
import AboutImage from '@/assets/images/about.jpg';
import { ValueBlocks } from '@/app/about/components/ValueBlocks';
import { MeetTheTeam } from '@/widgets/MeetTheTeam';
import { client } from '@/sanity/lib/client';

const query = `{
  "aboutPage": *[_type == "aboutPageSingleton"][0] {
    companyHistorySection {
      description,
    },
    valuesSection {
      description,
      blocks[] {
        _id,
        title,
        description,
      }
    },
    meetTheTeamSection {
      description,
      blocks[] {
        name,
        position,
        "image": image.asset->url
      }
    }
  }
}`;

export default async function About() {
  const { aboutPage } = await client.fetch(query);
  const { companyHistorySection, valuesSection, meetTheTeamSection } =
    aboutPage ?? {};

  return (
    <Page whiteHeader>
      <Breadcrumb pages={[{ label: 'About Us', href: '/about' }]} />
      <AboutCta />
      <Container>
        <div className={s.wrapper}>
          <div className={s.sidebar}>{/*TODO: Complete sidebar*/}</div>
          <div className={s.content}>
            <InfoBlock
              title='Company History'
              description={companyHistorySection.description}
            />
            <div className={s.image}>
              {/*TODO: Add dots figure here*/}
              <img src={AboutImage.src} alt='About' />
            </div>
            <InfoBlock title='Values' description={valuesSection.description} />
            <ValueBlocks values={valuesSection.blocks} />
            <InfoBlock
              title='Meet the Team'
              description={meetTheTeamSection.description}
            />
            <MeetTheTeam />
          </div>
        </div>
      </Container>
    </Page>
  );
}

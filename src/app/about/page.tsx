import { Suspense } from 'react';

import { Breadcrumb } from '@/widgets/Breadcrumb';
import { Sidebar } from '@/widgets/Sidebar';
import { Page } from '@/components/Page';
import { Container } from '@/components/Container';
import AboutImage from '@/assets/images/about.jpg';
import Pattern from '@/assets/images/textures/pattern-4.svg';
import PatternMobile from '@/assets/images/textures/pattern-5-dark.svg';

import { client } from '@/sanity/lib/client';

import { AboutBanner } from './components/AboutBanner';
import { InfoBlock } from './components/InfoBlock';
import { ValueBlocks } from './components/ValueBlocks';
import { MeetTheTeam } from './components/MeetTheTeam';

import s from './style.module.scss';

const sidebarItems = [
  {
    label: 'Company History',
    hash: 'company',
  },
  {
    label: 'Culture and value',
    hash: 'values',
  },
  {
    label: 'Meet the team',
    hash: 'team',
  },
];

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
        image
      }
    }
  }
}`;

export default async function About() {
  const { aboutPage } = await client.fetch(query);
  const { companyHistorySection, valuesSection, meetTheTeamSection } =
    aboutPage ?? {};

  return (
    <Suspense>
      <Page whiteHeader>
        <Breadcrumb pages={[{ label: 'About Us', href: '/about' }]} />
        <AboutBanner />
        <Container>
          <div className={s.wrapper}>
            <div className={s.sidebar}>
              <Sidebar items={sidebarItems} />
            </div>
            <div className={s.content}>
              <InfoBlock
                id='company'
                title='Company History'
                description={companyHistorySection.description}
              />
              <div className={s.image}>
                <img className={s.pattern} src={Pattern.src} alt='Pattern' />
                <img
                  className={s.patternMobile}
                  src={PatternMobile.src}
                  alt='Pattern'
                />
                <img className={s.main} src={AboutImage.src} alt='About' />
              </div>
              <InfoBlock
                id='values'
                title='Values'
                description={valuesSection.description}
              />
              <ValueBlocks values={valuesSection.blocks} />
              <InfoBlock
                id='team'
                title='Meet the Team'
                description={meetTheTeamSection.description}
              />
              <MeetTheTeam members={meetTheTeamSection.blocks} />
            </div>
          </div>
        </Container>
      </Page>
    </Suspense>
  );
}

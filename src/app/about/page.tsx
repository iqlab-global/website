import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { AboutCta } from '@/widgets/AboutCta';
import s from './style.module.scss';
import { Container } from '@/components/Container';
import { InfoBlock } from '@/app/about/components/InfoBlock';
import AboutImage from '@/assets/images/services.jpeg';
import { ValueBlocks } from '@/app/about/components/ValueBlocks';
import { MeetTheTeam } from '@/widgets/MeetTheTeam';

export default function About() {
  return (
    <Page whiteHeader>
      <Breadcrumb currentPage='About Us' />
      <AboutCta />
      <Container>
        <div className={s.wrapper}>
          <div className={s.sidebar}>{/*TODO: Complete sidebar*/}</div>
          <div className={s.content}>
            <InfoBlock />
            <div className={s.image}>
              {/*TODO: Add dots figure here*/}
              <img src={AboutImage.src} alt='About' />
            </div>
            <InfoBlock />
            <ValueBlocks />
            <InfoBlock />
            <MeetTheTeam />
          </div>
        </div>
      </Container>
    </Page>
  );
}

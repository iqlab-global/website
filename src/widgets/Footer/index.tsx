import { Container } from '@/components/Container';

import s from './style.module.scss';
import { Button } from '@/components/Button';
import Link from 'next/link';
import { MonitorWhite } from '@/assets/icons/MonitorWhite';
import { CodeFileWhite } from '@/assets/icons/CodeFileWhite';
import FB from '@/assets/images/icons/facebook.svg';
import Insta from '@/assets/images/icons/insta.svg';
import Linkedin from '@/assets/images/icons/linkedin.svg';
import AppImage from '@/components/AppImage';
import { AddressInfo, ContactInfo } from '@/widgets/Contact';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.main}>
            <div className={s.callToAction}>
              <h2>Ready to transform your project? Let&apos;s Talk</h2>

              <div className={s.buttons}>
                <Button href='/contact'>Get in touch</Button>
                <Link className={s.servicesLink} href='/services'>
                  Our services ↗
                </Link>
              </div>
              <div className={s.features}>
                <div className={s.feature}>
                  <MonitorWhite />
                  <p>More than 20 years experience</p>
                </div>
                <div className={s.feature}>
                  <CodeFileWhite />
                  <p>Empowering you with cutting-edge technology</p>
                </div>
              </div>
            </div>
            <div className={s.navigations}>
              <div className={s.internal}>
                <ul>
                  <li>
                    <Link href='/'>Home</Link>
                  </li>
                  <li>
                    <Link href='/about'>About Us</Link>
                  </li>
                  <li>
                    <Link href='/services'>Services</Link>
                  </li>
                  <li>
                    <Link href='/showcase'>Showcase</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link href='/contact'>Contact Us</Link>
                  </li>
                </ul>
              </div>

              <div className={s.socials}>
                <button className={s.socialBtn}>
                  <AppImage src={FB} alt='Facebook' />
                </button>
                <button className={s.socialBtn}>
                  <AppImage src={Linkedin} alt='Facebook' />
                </button>
                <button className={s.socialBtn}>
                  <AppImage src={Insta} alt='Facebook' />
                </button>
              </div>
            </div>
          </div>
          <div className={s.dotted}>
            <div>
              <p>&copy; {new Date().getFullYear()} IQ Lab.</p>
              <p>All Right Reserved</p>
            </div>
            <div>
              <ContactInfo />
            </div>
            <AddressInfo className={s.address} />
          </div>
        </div>
      </Container>
    </footer>
  );
}

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

export default function Footer() {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.main}>
            <div className={s.callToAction}>
              <h2>Ready to transform your project? Let’s Talk</h2>

              <div className={s.buttons}>
                <Button>Get in touch</Button>
                <Link className={s.servicesLink} href="/services">
                  Our services ↗
                </Link>
              </div>
              <div className={s.features}>
                <div className={s.feature}>
                  <MonitorWhite />
                  <p>Experienced for more than 20 years</p>
                </div>
                <div className={s.feature}>
                  <CodeFileWhite />
                  <p>Experienced for more than 20 years</p>
                </div>
              </div>
            </div>
            <div className={s.navigations}>
              <div className={s.internal}>
                <ul>
                  <li>
                    <Link href="/">Home Page</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/showcase">Showcase</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link href="/contact">Contacts</Link>
                  </li>
                </ul>
              </div>

              <div className={s.socials}>
                <button className={s.socialBtn}>
                  <AppImage src={FB} alt="Facebook" />
                </button>
                <button className={s.socialBtn}>
                  <AppImage src={Linkedin} alt="Facebook" />
                </button>
                <button className={s.socialBtn}>
                  <AppImage src={Insta} alt="Facebook" />
                </button>
              </div>
            </div>
          </div>
          <div className={s.dotted}>
            <div>
              <p>© 2024 IQ Lab.</p>
              <p>All Right Reserved</p>
            </div>
            <div>
              <p>Cell: +1 (646) 251-2270</p>
              <p>Email: info@iqlab.us</p>
            </div>
            <div>
              <p>IQ Lab LLC</p>
              <p>337 Alpine Meadows Avenue</p>
            </div>
            <div>
              <p>PO BOX 51</p>
              <p>Girdwood, AK 99587-0051</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

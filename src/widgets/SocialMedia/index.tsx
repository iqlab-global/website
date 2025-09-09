import { clsx } from 'clsx';
import Link from 'next/link';

// import FB from '@/assets/images/icons/facebook.svg';
// import Instagram from '@/assets/images/icons/insta.svg';
import Linkedin from '@/assets/images/icons/linkedin.svg';

import AppImage from '@/components/AppImage';

import s from './style.module.scss';

interface SocialMediaProps {
  className?: string;
}

export default function SocialMedia({ className }: SocialMediaProps) {
  return (
    <div className={clsx(s.socials, className)}>
      {/*<button className={s.socialBtn}>*/}
      {/*  <AppImage src={FB} alt='Facebook' />*/}
      {/*</button>*/}
      <Link
        href='https://www.linkedin.com/company/iq-lab/'
        className={s.socialBtn}
        target='_blank'
      >
        <AppImage src={Linkedin} alt='LinkedIn' />
      </Link>
      {/*<button className={s.socialBtn}>*/}
      {/*  <AppImage src={Instagram} alt='Instagram' />*/}
      {/*</button>*/}
    </div>
  );
}

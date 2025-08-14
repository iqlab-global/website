import { clsx } from 'clsx';

import FB from '@/assets/images/icons/facebook.svg';
import Insta from '@/assets/images/icons/insta.svg';
import Linkedin from '@/assets/images/icons/linkedin.svg';

import AppImage from '@/components/AppImage';

import s from './style.module.scss';

interface SocialMediaProps {
  className?: string;
}

export default function SocialMedia({ className }: SocialMediaProps) {
  return (
    <div className={clsx(s.socials, className)}>
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
  );
}

import FB from '@/assets/images/icons/facebook.svg';
import Insta from '@/assets/images/icons/insta.svg';
import Linkedin from '@/assets/images/icons/linkedin.svg';

import AppImage from '@/components/AppImage';

import s from './style.module.scss';

export default function SocialMedia() {
  return (
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
  );
}

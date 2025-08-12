import s from './not-found.module.scss';

import ErrorImg from '@/assets/images/404.svg';
import AppImage from '@/components/AppImage';
import { Button } from '@/components/Button';

const NotFoundPage = () => {
  return (
    <div className={s.notFoundPage}>
      <div className={s.mainContent}>
        <h1>Page not found</h1>
        <AppImage
          className={s.errorStatus}
          src={ErrorImg}
          alt='error 404 status'
        />
        <p>
          Oops! It looks like the page you’re trying to access doesn’t exist.
        </p>
        <Button className={s.btn} transparentBg outline>
          / Back to the home page
        </Button>
      </div>
      <div className={s.textures}>
        <span>*</span>
        <span>{'<'}</span>
        <span>/</span>
        <span>{'}'}</span>
      </div>
    </div>
  );
};

export default NotFoundPage;

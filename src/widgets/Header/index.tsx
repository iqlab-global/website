'use client';
import s from './style.module.scss';
import Logo from '@/assets/images/logo.svg';
import LogoBlue from '@/assets/images/logo-blue.svg';
import LogoSmall from '@/assets/images/logo-small.svg';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { useWindowSize } from '@/hooks/useWindowSize';
import { HamburgerIcon } from '@/assets/icons/HamburgerIcon';
import { clsx } from 'clsx';
import { NavLink } from '@/components/NavLink';
import Link from 'next/link';

interface HeaderProps {
  whiteBg?: boolean;
}

export const Header = ({ whiteBg = false }: HeaderProps) => {
  const { isMobile } = useWindowSize();

  // TODO: Hamburger iconu whiteBg olanda itir.
  return (
    <>
      <header className={clsx(s.header, { [s.whiteBg]: whiteBg })}>
        <Container>
          <div className={s.flex}>
            <Link href='/' className={s.logo}>
              <img src={whiteBg ? LogoBlue.src : Logo.src} alt='IQ Lab' />
            </Link>
            {!isMobile && (
              <>
                <nav className={s.nav}>
                  <ul>
                    <li>
                      <NavLink href='/about' activeClassName={s.active}>
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href='/services' activeClassName={s.active}>
                        Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href='/showcase'>Showcase</NavLink>
                    </li>
                    {/*<li>*/}
                    {/*  <a href="#">Careers</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <a href="#">Open Source</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <a href="#">Blogs</a>*/}
                    {/*</li>*/}
                  </ul>
                </nav>
                <Button className={s.contactUs} href='/contact'>
                  Contact Us
                </Button>
              </>
            )}
            {isMobile && (
              <button className={s.hamburgerBtn}>
                <HamburgerIcon />
              </button>
            )}
          </div>
        </Container>
      </header>
      {/*TODO: Mobile nav complete*/}
      <div className={s.mobileNav}>
        <div className={s.mobileHeader}>
          <Link href='/'>
            <img src={LogoSmall.src} alt='logo' />
          </Link>
        </div>
        <nav></nav>
      </div>
    </>
  );
};

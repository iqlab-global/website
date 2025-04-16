'use client';
import s from './style.module.scss';
import Logo from '@/assets/images/logo.svg';
import LogoBlue from '@/assets/images/logo-blue.svg';
import LogoSmall from '@/assets/images/logo-small.svg';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { HamburgerIcon } from '@/assets/icons/HamburgerIcon';
import { clsx } from 'clsx';
import { NavLink } from '@/components/NavLink';
import Link from 'next/link';

interface HeaderProps {
  whiteBg?: boolean;
  isHome?: boolean;
}

export const Header = ({ whiteBg = false, isHome = false }: HeaderProps) => {
  // TODO: Hamburger iconu whiteBg
  return (
    <>
      {isHome && <div className={s.stickyCover}></div>}
      <header
        className={clsx(s.header, {
          [s.whiteBg]: whiteBg,
          [s.isHome]: isHome,
        })}
      >
        <Container>
          <div className={s.flex}>
            <Link href='/' className={s.logo}>
              <img
                style={{ display: 'block' }}
                src={whiteBg ? LogoBlue.src : Logo.src}
                alt='IQ Lab'
              />
            </Link>
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
            <button className={s.hamburgerBtn}>
              <HamburgerIcon />
            </button>
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

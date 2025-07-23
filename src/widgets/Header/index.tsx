'use client';
import { clsx } from 'clsx';
import Link from 'next/link';
import { useState, useCallback } from 'react';

import { CancelIcon } from '@/assets/icons/CancelIcon';
import LogoBlue from '@/assets/images/logo-blue.svg';
import LogoMobile from '@/assets/images/logo-mobile.svg';
import Logo from '@/assets/images/logo.svg';
import Hamburger from '@/assets/images/hamburger.svg';
import HamburgerBlue from '@/assets/images/hamburger-blue.svg';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { NavLink } from '@/components/NavLink';

import s from './style.module.scss';
import SocialMedia from '@/widgets/SocialMedia';

interface HeaderProps {
  whiteBg?: boolean;
  isHome?: boolean;
}

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  {
    href: 'about',
    label: 'About Us',
  },
  {
    href: 'services',
    label: 'Services',
  },
  {
    href: 'showcase',
    label: 'Showcase',
  },
  // {
  //   href: 'careers',
  //   label: 'Careers',
  // },
  // {
  //   href: 'open-source',
  //   label: 'Open Source',
  // },
  // {
  //   href: 'blogs',
  //   label: 'Blogs',
  // },
];

const navItemsMobile: NavItem[] = [
  {
    href: '',
    label: 'Home page',
  },
  ...navItems,
  {
    href: 'contact',
    label: 'Contact Us',
  },
];

export const Header = ({ whiteBg = false, isHome = false }: HeaderProps) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const toggleMobileMenu = useCallback(() => {
    const body = document.body;
    setOpenMobileMenu((isOpen) => {
      if (isOpen) body.classList.remove('mobile-open');
      else body.classList.add('mobile-open');

      return !isOpen;
    });
  }, []);

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
                {navItems.map(({ href, label }) => (
                  <li key={href}>
                    <NavLink href={`/${href}`} activeClassName={s.active}>
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <Button className={s.contactUs} href='/contact'>
              Contact Us
            </Button>
            <button className={s.hamburgerBtn} onClick={toggleMobileMenu}>
              <img
                style={{ display: 'block' }}
                src={whiteBg ? HamburgerBlue.src : Hamburger.src}
                alt='IQ Lab'
              />
            </button>
          </div>
        </Container>
      </header>
      <div className={clsx(s.mobileMenu, { [s.open]: openMobileMenu })}>
        <div className={s.mobileWrapper}>
          <div className={s.noise} />
          <div className={s.mobileNav}>
            <div>
              <div className={s.mobileHeader}>
                <Link href='/'>
                  <img src={LogoMobile.src} alt='logo' />
                </Link>
                <button onClick={toggleMobileMenu}>
                  <CancelIcon />
                </button>
              </div>
              <nav>
                <ul>
                  {navItemsMobile.map(({ href, label }) => (
                    <li key={href}>
                      <NavLink
                        href={`/${href}`}
                        activeClassName={s.active}
                        onClick={toggleMobileMenu}
                      >
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className={s.socialMedia}>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

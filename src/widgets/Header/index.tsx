'use client';
import { clsx } from 'clsx';
import Link from 'next/link';
import { useState, useCallback } from 'react';

import { HamburgerIcon } from '@/assets/icons/HamburgerIcon';
import { CancelIcon } from '@/assets/icons/CancelIcon';
import LogoBlue from '@/assets/images/logo-blue.svg';
import LogoSmall from '@/assets/images/logo-small.svg';
import Logo from '@/assets/images/logo.svg';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { NavLink } from '@/components/NavLink';

import s from './style.module.scss';

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
];

export const Header = ({ whiteBg = false, isHome = false }: HeaderProps) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const handleOpenMobileMenu = useCallback(() => {
    setOpenMobileMenu((isOpen) => !isOpen);
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
            <button className={s.hamburgerBtn} onClick={handleOpenMobileMenu}>
              <HamburgerIcon />
            </button>
          </div>
        </Container>
      </header>
      <div className={clsx(s.mobileNav, { [s.open]: openMobileMenu })}>
        <div className={s.mobileHeader}>
          <Link href='/'>
            <img src={LogoSmall.src} alt='logo' />
          </Link>
          <button onClick={handleOpenMobileMenu}>
            <CancelIcon />
          </button>
        </div>
        <nav>
          <ul>
            {navItemsMobile.map(({ href, label }) => (
              <li key={href}>
                <NavLink href={`/${href}`} activeClassName={s.active}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

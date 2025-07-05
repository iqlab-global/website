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

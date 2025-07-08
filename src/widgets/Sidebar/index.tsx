'use client';
import Link from 'next/link';

import { useHash } from '@/hooks/useHash';

import s from './style.module.scss';
import { clsx } from 'clsx';

type Item = {
  label: string;
  hash: string;
};

interface Props {
  items: Item[];
}

export const Sidebar = ({ items }: Props) => {
  const currentHash = useHash() || items[0].hash;

  return (
    <aside className={s.sidebar}>
      <ul className={s.menu}>
        {items.map(({ label, hash }) => (
          <li
            key={hash}
            className={clsx(s.menuItem, { [s.active]: currentHash === hash })}
          >
            <Link href={`#${hash}`}>{label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

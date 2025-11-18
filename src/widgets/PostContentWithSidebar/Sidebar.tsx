import Link from 'next/link';
import { clsx } from 'clsx';
import { SidebarItem } from './types';
import s from './style.module.scss';

interface SidebarProps {
  items: SidebarItem[];
  activeHash: string | undefined;
}

export const Sidebar = ({ items, activeHash }: SidebarProps) => {
  if (items.length === 0) return null;

  return (
    <div className={s.sidebar}>
      <aside className={s.sidebarSticky}>
        <ul className={s.menu}>
          {items.map(({ label, hash }) => (
            <li
              key={hash}
              className={clsx(s.menuItem, {
                [s.active]: activeHash === hash,
              })}
            >
              <Link href={`#${hash}`}>{label}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

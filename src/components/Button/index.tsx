import s from './style.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  outline?: boolean;
  className?: string;
  transparentBg?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  className,
  href,
  children,
  transparentBg = false,
  outline = false,
}: ButtonProps) => {
  return (
    <Link
      href={href ? href : '/'}
      className={clsx(
        s.button,
        { [s.buttonOutline]: outline },
        { [s.transparentBg]: transparentBg },
        className
      )}
    >
      {children}
    </Link>
  );
};

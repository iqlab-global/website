import s from './style.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  outline?: boolean;
  className?: string;
  transparentBg?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  className,
  href,
  children,
  disabled,
  transparentBg,
  outline,
  type,
}: ButtonProps) => {
  const buttonClass = clsx(
    s.button,
    { [s.buttonOutline]: outline, [s.transparentBg]: transparentBg },
    className
  );

  return type ? (
    <button className={buttonClass} disabled={disabled} type={type}>
      {children}
    </button>
  ) : (
    <Link href={href || '/'} className={buttonClass}>
      {children}
    </Link>
  );
};

import s from './style.module.scss';
import clsx from 'clsx';

interface ButtonProps {
  outline?: boolean;
  className?: string;
  transparentBg?: boolean;
  children?: React.ReactNode;
}

export const Button = ({ className, children, transparentBg = false, outline = false }: ButtonProps) => {
  return (
    <a
      href="#"
      className={clsx(
        s.button,
        { [s.buttonOutline]: outline },
        { [s.transparentBg]: transparentBg },
        className
      )}
    >
      {children}
    </a>
  );
};

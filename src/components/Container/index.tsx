import clsx from 'clsx';
import React from 'react';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <div className={clsx('container', className)} id={id ?? ''}>
      {children}
    </div>
  );
};

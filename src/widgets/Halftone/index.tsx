'use client';
import { PropsWithChildren } from 'react';
import { clsx } from 'clsx';

import s from './style.module.scss';

type Props = {
  className: string;
} & PropsWithChildren;

export default function Halftone({ children, className }: Props) {
  // return (
  //   <div className={s.halftone}>
  //     <div className={s.background} />
  //     <div className={clsx(s.children, className)}>{children}</div>
  //   </div>
  // );

  const svg = document.querySelector('svg');
  const squareSize = 4;
  const gap = 16;
  const numRows = 8;
  const numCols = 16;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const x = col * (squareSize + gap);
      const y = row * (squareSize + gap);

      const rect = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'rect'
      );
      rect.setAttribute('x', x);
      rect.setAttribute('y', y);
      rect.setAttribute('width', squareSize);
      rect.setAttribute('height', squareSize);
      rect.setAttribute('fill', 'black'); // Puedes cambiar el color aquí

      svg.appendChild(rect);
    }
  }

  return (
    <svg
      width='304'
      height='144'
      viewBox='0 0 304 144'
      xmlns='http://www.w3.org/2000/svg'
    >
      {svg}
    </svg>
  );
}

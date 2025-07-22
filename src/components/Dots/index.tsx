'use client';

import {
  useEffect,
  useCallback,
  PropsWithChildren,
  Children,
  cloneElement,
  isValidElement,
} from 'react';

import { useMounted } from '@/hooks/useMounted';

import s from './style.module.scss';

const dotSize = 4;
const dotSpacing = 16;
const textBoxExtraSpacing = 10;
const viewportEdgeSpacing = 10;
const centerToCenter = dotSize + dotSpacing;

interface DotsProps extends PropsWithChildren {
  className?: string;
}

export const Dots = ({ className, children }: DotsProps) => {
  const isMounted = useMounted();

  const generateDots = useCallback(() => {
    const container = document.getElementById('dots-container');
    const textBoxes = document.querySelectorAll('.dot-box');
    const containerRect = container?.getBoundingClientRect();
    const W = containerRect?.width || 0;
    const H = containerRect?.height || 0;

    // Clear existing dots
    const existingDots = container?.querySelectorAll('.dot');
    existingDots?.forEach((dot) => dot.remove());

    const center_x = W / 2;
    const center_y = H / 2;

    // Calculate maximum number of dots from center
    const m_x = Math.floor(
      (center_x - viewportEdgeSpacing - dotSize / 2) / centerToCenter
    );
    const m_y = Math.floor((center_y - dotSize / 2) / centerToCenter);

    // Get text box rectangles relative to footer, extended horizontally
    const textRects = Array.from(textBoxes).map((child) => {
      const rect = child.getBoundingClientRect();

      const containerPostitions = {
        left: containerRect?.left || 0,
        top: containerRect?.top || 0,
      };

      return {
        left: rect.left - containerPostitions.left || 0 - textBoxExtraSpacing,
        right: rect.right - containerPostitions.left + textBoxExtraSpacing,
        top: rect.top - containerPostitions.top,
        bottom: rect.bottom - containerPostitions.top,
      };
    });

    // Generate dots
    for (let j = -m_y; j <= m_y; j++) {
      const dot_top = center_y + j * centerToCenter - dotSize / 2;

      for (let i = -m_x; i <= m_x; i++) {
        const dot_left = center_x + i * centerToCenter - dotSize / 2;
        const dot_right = dot_left + dotSize;
        const dot_bottom = dot_top + dotSize;

        // Check intersection with extended text box areas
        const intersects = textRects?.some(
          (tr) =>
            dot_left < tr.right &&
            dot_right > tr.left &&
            dot_top < tr.bottom &&
            dot_bottom > tr.top
        );

        if (!intersects) {
          const dot = document.createElement('div');
          dot.className = s.dot;
          dot.style.left = `${dot_left}px`;
          dot.style.top = `${dot_top}px`;
          container?.appendChild(dot);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    window.addEventListener('load', generateDots);
    window.addEventListener('resize', generateDots);

    return () => {
      window.removeEventListener('load', generateDots);
      window.removeEventListener('resize', generateDots);
    };
  }, [isMounted, generateDots]);

  return (
    <div id='dots-container' className={s.container}>
      <div className={className}>
        {Children.map(children, (child) => {
          return isValidElement<{ className: string }>(child)
            ? cloneElement(child, {
                className: `dot-box ${s.dotsChild} ${child.props.className}`,
              })
            : child;
        })}
      </div>
    </div>
  );
};

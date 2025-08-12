'use client';

import {
  useEffect,
  useCallback,
  useRef,
  PropsWithChildren,
  Children,
  useState,
  cloneElement,
  isValidElement,
  ReactNode,
} from 'react';
import { clsx } from 'clsx';

import { useMounted } from '@/hooks/useMounted';

import s from './style.module.scss';

const dotSize = 4;
const dotSpacing = 16;
const childBoxExtraSpacing = 10;
const viewportEdgeSpacing = 10;
const centerToCenter = dotSize + dotSpacing;

interface DotsProps extends PropsWithChildren {
  className?: string;
  dotsWrapperClassName?: string;
  queryChildrenBy?: string;
}

export const Dots = ({
  className,
  dotsWrapperClassName,
  queryChildrenBy,
  children,
}: DotsProps) => {
  const isMounted = useMounted();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dots, setDots] = useState<ReactNode[]>([]);

  const generateDots = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const childBoxes = container?.querySelectorAll(
      queryChildrenBy || '.dot-box'
    );
    const containerRect = container?.getBoundingClientRect();
    const W = containerRect?.width || 0;
    const H = containerRect?.height || 0;

    const center_x = W / 2;
    const center_y = H / 2;

    // Calculate maximum number of dots from center
    const m_x = Math.floor(
      (center_x - viewportEdgeSpacing - dotSize / 2) / centerToCenter
    );
    const m_y = Math.floor((center_y - dotSize / 2) / centerToCenter);

    // Get text box rectangles relative to footer, extended horizontally
    const textRects = Array.from(childBoxes || []).map((child) => {
      const rect = child.getBoundingClientRect();

      const containerPositions = {
        left: containerRect?.left || 0,
        top: containerRect?.top || 0,
      };

      return {
        left: rect.left - containerPositions.left || 0 - childBoxExtraSpacing,
        right: rect.right - containerPositions.left + childBoxExtraSpacing,
        top: rect.top - containerPositions.top,
        bottom: rect.bottom - containerPositions.top,
      };
    });

    setDots(() => {
      const nextDots = [];
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
            nextDots.push(
              <div
                key={`${dot_left}-${dot_top}`}
                className={s.dot}
                style={{ left: `${dot_left}px`, top: `${dot_top}px` }}
              />
            );
          }
        }
      }

      return nextDots;
    });
  }, [queryChildrenBy]);

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
    <div ref={containerRef} className={s.dotsContainer}>
      <div className={className}>
        {Children.map(children, (child) =>
          isValidElement<{ className?: string }>(child)
            ? cloneElement(child, {
                className: `dot-box ${queryChildrenBy ? '' : s.dotsChild} ${child.props.className}`,
              })
            : child
        )}
      </div>
      <div className={s.dotsChildren}>
        <div className={clsx(s.dotsContainer, dotsWrapperClassName)}>
          {dots}
        </div>
      </div>
    </div>
  );
};

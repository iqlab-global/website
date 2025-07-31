'use client';

import { useEffect, useState } from 'react';
import { useMounted } from '@/hooks/useMounted';
import { debounce } from 'es-toolkit';

export function useVisibleSection(sections: string[]) {
  const isMounted = useMounted();
  const [visibleSectionId, setVisibleSectionId] = useState<string>();

  const isSectionVisible = (elementId: string) => {
    const headerEl = document.getElementById(elementId);
    const contentEl = headerEl?.nextElementSibling;
    const viewportHeight = window.innerHeight;

    if (headerEl && contentEl) {
      const headerPosition = headerEl.getBoundingClientRect();
      const contentPosition = contentEl.getBoundingClientRect();

      const visibleHeight =
        Math.min(contentPosition.bottom, viewportHeight) -
        Math.max(contentPosition.top, 0);

      const isHeaderVisible =
        headerPosition.top >= 0 && headerPosition.bottom <= viewportHeight;
      const isContentVisible = visibleHeight >= contentEl.clientHeight * 0.01;

      return isHeaderVisible || isContentVisible;
    }

    return false;
  };

  const checkVisibility = debounce(() => {
    for (const id of sections)
      if (isSectionVisible(id)) setVisibleSectionId(id);
  }, 250);

  useEffect(() => {
    if (sections && isMounted) {
      document.addEventListener('scroll', checkVisibility);
    }
    checkVisibility();

    return () => document.removeEventListener('scroll', checkVisibility);
  }, [checkVisibility, sections, isMounted]);

  return visibleSectionId;
}

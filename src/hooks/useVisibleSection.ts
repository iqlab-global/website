//Credits: https://medium.com/@guilherme.ramalho/creating-a-side-menu-with-section-highlighting-in-react-8247be6c9f56
'use client';

import { useCallback, useEffect, useState } from 'react';
import { useMounted } from '@/hooks/useMounted';
import { useThrottle } from '@/hooks/useThrottle';

export function useVisibleSection(sections: string[]) {
  const isMounted = useMounted();
  const [visibleSectionId, setVisibleSectionId] = useState<string>();

  const isSectionVisible = (elementId: string) => {
    const section = document.getElementById(elementId);

    if (section) {
      const sectionPosition = section.getBoundingClientRect();

      return (
        sectionPosition.top >= 0 && sectionPosition.bottom <= window.innerHeight
      );
    }

    return false;
  };

  const checkVisibility = useThrottle(
    useCallback(() => {
      for (const id of sections)
        if (isSectionVisible(id)) setVisibleSectionId(id);
    }, [sections]),
    325
  );

  useEffect(() => {
    if (sections && isMounted) {
      document.addEventListener('scroll', checkVisibility);
    }
    checkVisibility();

    return () => document.removeEventListener('scroll', checkVisibility);
  }, [checkVisibility, sections, isMounted]);

  return visibleSectionId;
}

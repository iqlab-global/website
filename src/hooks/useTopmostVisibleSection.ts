'use client';

import { useEffect, useState } from 'react';
import { useMounted } from './useMounted';
import { throttle } from 'es-toolkit';

export function useTopmostVisibleSection(sections: string[]) {
  const isMounted = useMounted();
  const [visibleSectionId, setVisibleSectionId] = useState<string>();

  const findTopmostSection = () => {
    const headerOffset = 150;
    const viewportHeight = window.innerHeight;

    for (const id of sections) {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= headerOffset && rect.bottom <= viewportHeight) {
          return id;
        }
      }
    }

    for (const id of sections) {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= headerOffset && rect.bottom > headerOffset) {
          return id;
        }
      }
    }

    return sections[0];
  };

  const checkVisibility = throttle(() => {
    const topSection = findTopmostSection();
    if (topSection) {
      setVisibleSectionId(topSection);
    }
  }, 100);

  useEffect(() => {
    if (sections && isMounted) {
      document.addEventListener('scroll', checkVisibility);
      checkVisibility();
    }

    return () => document.removeEventListener('scroll', checkVisibility);
  }, [checkVisibility, sections, isMounted]);

  return visibleSectionId;
}

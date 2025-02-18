'use client';

import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [sizes, setSizes] = useState({
    isMobile: false,
    isTablet: false,
    isSmallDesktop: false,
    isDesktop: true,
  });

  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
      if (window.innerWidth <= 900) {
        setSizes({
          isMobile: true,
          isTablet: false,
          isSmallDesktop: false,
          isDesktop: false,
        });
      } else if (window.innerWidth <= 1024) {
        setSizes({
          isMobile: false,
          isTablet: true,
          isSmallDesktop: false,
          isDesktop: false,
        });
      } else if (window.innerWidth <= 1391) {
        setSizes({
          isMobile: false,
          isTablet: false,
          isSmallDesktop: true,
          isDesktop: false,
        });
      } else {
        setSizes({
          isMobile: false,
          isTablet: false,
          isSmallDesktop: true,
          isDesktop: false,
        });
      }
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return { ...sizes };
};

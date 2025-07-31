'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

import { useMounted } from '@/hooks/useMounted';

export const useHash = () => {
  const isMounted = useMounted();
  const searchParams = useSearchParams();

  const [hash, setHash] = useState(
    isMounted ? window.location.hash.slice(1) : undefined
  );

  useEffect(() => {
    setHash(isMounted ? window.location.hash.slice(1) : undefined);
  }, [searchParams, isMounted]);

  return hash;
};

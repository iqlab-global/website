'use client';
import { useEffect, useState } from 'react';

export const useMounted = () => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) setMounted(true);
  }, [isMounted]);

  return isMounted;
};

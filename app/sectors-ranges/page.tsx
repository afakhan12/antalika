'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SectorsRangesRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/oil-gas-equipment');
  }, [router]);

  return null;
}


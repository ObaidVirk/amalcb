'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('adminLoggedIn') === 'true') {
      setAuthorized(true);
    } else {
      router.replace('/login');
    }
  }, [router]);

  if (!authorized) return null;

  return <>{children}</>;
}

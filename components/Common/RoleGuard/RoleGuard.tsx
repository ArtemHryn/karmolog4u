'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type Role = 'ADMIN' | 'USER';

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRole: Role;
}

const RoleGuard = ({ children, allowedRole }: RoleGuardProps) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === 'authenticated' && session?.user.role !== allowedRole) {
      router.replace(
        session?.user?.role === 'ADMIN'
          ? '/cabinet/dashboard/admin/products'
          : '/cabinet/dashboard/user/achievement'
      );
    }
  }, [allowedRole, router, session?.user.role, status]);


  return children;
};

export default RoleGuard;

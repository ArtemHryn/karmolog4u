'use client';

import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import './globals.scss';

const CabinetLayout = ({ children }) => {
  const { data: session } = useSession();
  useEffect(() => {
    const checkAndRefreshToken = async () => {
      if (session?.refreshToken) {
        const response = await fetch('http://localhost:4499/auth/refresh-token', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${session.refreshToken}`,
          },
        });

        if (!response.ok) {
          // await signOut();
        }
      }
    };

    checkAndRefreshToken();
  }, [session?.refreshToken]);
  return <>{children}</>;
};

export default CabinetLayout;

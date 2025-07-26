'use client';
import { SessionProvider } from 'next-auth/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { PrimeReactProvider } from 'primereact/api';
import queryClient from '@/queryClient';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

const SessionProviderWrapper = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <PrimeReactProvider>{children}</PrimeReactProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default SessionProviderWrapper;

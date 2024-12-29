'use client';
import { SessionProvider } from 'next-auth/react';
import { PrimeReactProvider } from 'primereact/api';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

const SessionProviderWrapper = ({ children }) => {
  return (
    <SessionProvider>
      <PrimeReactProvider>{children}</PrimeReactProvider>
    </SessionProvider>
  );
};

export default SessionProviderWrapper;

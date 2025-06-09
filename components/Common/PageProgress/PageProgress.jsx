'use client';

import { ProgressProvider } from '@bprogress/next/app';
const PageProgress = ({ children, color = 'red' }) => {
  return (
    <ProgressProvider height="4px" color={color} options={{ showSpinner: false }} shallowRouting>
      {children}
    </ProgressProvider>
  );
};

export default PageProgress;

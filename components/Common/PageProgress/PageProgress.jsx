'use client';

import { ProgressProvider } from '@bprogress/next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PageProgress = ({ children, color = 'red' }) => {
  return (
    <ProgressProvider height="4px" color={color} options={{ showSpinner: false }} shallowRouting>
      {children}
      <ToastContainer />
    </ProgressProvider>
  );
};

export default PageProgress;

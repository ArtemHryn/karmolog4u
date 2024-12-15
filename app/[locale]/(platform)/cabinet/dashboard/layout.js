'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import ChangeColor from '@components/Cabinet/DashBoard/ChangeColor/ChangeColor';
import queryClient from '@queryClient';

const DashboardPage = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChangeColor>{children}</ChangeColor>
    </QueryClientProvider>
  );
};

export default DashboardPage;

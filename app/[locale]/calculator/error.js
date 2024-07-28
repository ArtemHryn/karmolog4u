'use client';
import { usePathname } from 'next/navigation';
import { redirect } from 'next/navigation';

const ErrorHandler = () => {
  const pathname = usePathname();
  redirect(pathname);
};

export default ErrorHandler;

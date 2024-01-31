'use client';
import Container from '@components/Common/Container/Container';
import NotFoundComponent from '@components/NotFound/NotFound';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.replace('/'), 10000);
  }, [router]);
  return (
    <Container>
      <NotFoundComponent />
    </Container>
  );
};

export default NotFound;

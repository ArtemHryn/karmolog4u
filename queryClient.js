import { QueryCache, QueryClient } from '@tanstack/react-query';
import { signOut } from 'next-auth/react';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: async error => {
      console.log('Global query error handler:', error);
      const status =
        error?.status || error?.statusCode || error?.response?.status || error?.data?.status;
      if (status === 401) {
        try {
          await signOut({ callbackUrl: '/cabinet/login' });
        } catch (err) {
          await signOut({ callbackUrl: '/cabinet/login' });
        }
      }
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Запит не оновлюється при фокусі вікна
      retry: 2, // Спробує повторно виконати запит до 2 разів у разі помилки
      gcTime: 1 * 1000 * 60,
    },
  },
});

export default queryClient;

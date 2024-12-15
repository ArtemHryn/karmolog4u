import { QueryCache, QueryClient } from '@tanstack/react-query';
import { signOut } from 'next-auth/react';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: async er => {
      if (er?.status === 401) {
        await signOut();
      }
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Запит не оновлюється при фокусі вікна
      retry: 2, // Спробує повторно виконати запит до 2 разів у разі помилки
    },
  },
});

export default queryClient;

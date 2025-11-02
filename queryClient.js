import { QueryCache, QueryClient } from '@tanstack/react-query';
import { getSession, signOut } from 'next-auth/react';

const queryClient = new QueryClient({
  defaultOptions: { queries: { gcTime: 1 * 1000 * 60 } },
  queryCache: new QueryCache({
    onError: async error => {
      console.log('queryCache error: ', error);

      if (error?.status === 401 || error?.statusCode === 401) {
        try {
          // Пробуємо оновити токен — це автоматично зробиться в `jwt()` на бекенді
          const session = await getSession();

          // Якщо сесія є, нічого не робимо — token вже оновлено в jwt()
          if (session?.accessToken) {
            return;
          }

          // Якщо токен оновити не вдалось — виходимо
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
    },
  },
});

export default queryClient;

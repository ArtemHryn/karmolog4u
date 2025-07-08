import { QueryCache, QueryClient } from '@tanstack/react-query';
import { getSession, signOut } from 'next-auth/react';

const queryClient = new QueryClient({
  // queryCache: new QueryCache({
  //   onError: async er => {
  //     if (er?.status === 401 || er?.statusCode === 401) {
  //       await signOut();
  //     }
  //   },
  // }),
  queryCache: new QueryCache({
    onError: async error => {
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

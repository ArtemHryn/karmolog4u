import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Запит не оновлюється при фокусі вікна
      retry: 2, // Спробує повторно виконати запит до 2 разів у разі помилки
    },
  },
});

export default queryClient;

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { base_url } from '../helper/consts';

const addUser = async ({ token, data, link }) => {
  const res = await fetch(`${base_url}/admin/user/${link}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });

  const parsedData = await res.json();

  if (!res.ok) {
    const message = parsedData?.message || 'Помилка додавання користувача';
    throw new Error(message);
  }

  return parsedData;
};

const exportUsers = async ({ token, data }) => {
  const res = await fetch(`${base_url}/admin/user/export/${data ? 'list' : 'all'}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    // Зчитуємо помилку з json (тільки тут)
    let errorMessage = 'Помилка додавання користувача';
    try {
      const errorData = await res.json();
      errorMessage = errorData.message || errorMessage;
    } catch (e) {
      // Якщо не json — просто ігноруємо
    }
    throw new Error(errorMessage);
  }

  // Якщо все добре — зчитуємо blob (файл)
  const blob = await res.blob();
  return blob;
};

export const useCreateUser = ({ token, onSuccessCallback }) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data, action }) => {
      if (action === 'add_user') return addUser({ token, data, link: 'create' });
      if (action === 'import') return addUser({ token, data, link: 'import' });
      if (action === 'export') return exportUsers({ token, data });
    },
    onSuccess: data => {
      if (data instanceof Blob) {
        // Якщо це файл — запускаємо завантаження
        const url = window.URL.createObjectURL(data);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'список_користувачів.xlsx'; // або ім’я із заголовку, якщо є
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);

        toast.success('Експорт успішний');
      } else {
        // Обробка успішної відповіді для інших action
        toast.success('Операція успішна');
        queryClient.invalidateQueries({ queryKey: ['users_list'] });
        onSuccessCallback?.();
      }
    },
    onError: () => {
      toast.error(`Помилка: ${err.message}`);
    },
  });
};

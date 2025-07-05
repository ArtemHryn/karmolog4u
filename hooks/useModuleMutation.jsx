import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { base_url } from '../helper/consts';

const deleteModule = async ({ token, arrayOfIds }) => {
  const res = await fetch(`${base_url}/admin/education/modules/delete`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ moduleIds: arrayOfIds }),
  });

  if (!res.ok) {
    const errorBody = await res.json();
    const message = errorBody?.message || 'Помилка видалення';
    throw new Error(message);
  }
};

export const useModuleMutation = ({ token, queryKey, onSuccessCallback }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }) => deleteModule({ token: token, arrayOfIds: id }),
    onSuccess: () => {
      toast.success('Успішно видалено модуль');
      onSuccessCallback?.();
      queryClient.invalidateQueries({ queryKey });
    },
    onError: err => {
      toast.error(`Помилка: ${err.message}`);
      onSuccessCallback?.();
    },
  });
};

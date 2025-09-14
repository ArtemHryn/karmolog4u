import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { base_url } from '../helper/consts';

const url = `${base_url}/admin/coursePurchase`;

const endpoints = {
  change_status: { path: 'status', method: 'POST' },
  add: { path: 'add', method: 'POST' },
  prolong: { path: 'extend-access', method: 'PATCH' },
  practice: { path: 'extend-practice', method: 'PATCH' },
  full_access: { path: 'complete-access', method: 'PATCH' },
};

const fetcher = async ({ token, data, id, action }) => {
  const endpoint = endpoints[action];
  const res = await fetch(`${url}/${endpoint.path}/${id}`, {
    method: endpoint.method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!res.ok) {
    const errorBody = await res.json();
    throw new Error(errorBody?.message || 'Помилка');
  }

  return res.json();
};

const useUserPurchaseActions = ({ token, onSuccessCallback }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ action, data, id }) => fetcher({ token, data, id, action }),
    onSuccess: data => {
      const message = data?.message != 'success' ? data.message : 'Успішно';

      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ['courses_list', 'users'] });
      queryClient.invalidateQueries({ queryKey: ['user_purchases'] });
      onSuccessCallback?.();
    },
    onError: error => {
      toast.error(`Помилка: ${error.message}`);
    },
    enabled: !!token,
  });
};

export default useUserPurchaseActions;

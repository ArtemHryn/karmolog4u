import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { base_url } from '../helper/consts';

const url = `${base_url}/admin/productPurchase`;

const endpoints = {
  add: { path: 'add', method: 'POST' },
  delete: { path: 'delete', method: 'DELETE' },
};

const fetcher = async ({ token, action, id, data }) => {
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

const useUserProductsPurchaseActions = ({ token, onSuccessCallback }) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data, action, id }) => fetcher({ data, action, id, token }),
    onSuccess: data => {
      const message = data?.message && data?.message !== 'success' ? data.message : 'Успішно';

      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ['products_purchase', 'users'] });
      queryClient.invalidateQueries({ queryKey: ['products_list'] });
      onSuccessCallback?.();
    },
    onError: error => {
      toast.error(`Помилка: ${error.message}`);
    },
    enabled: !!token,
  });
};

export default useUserProductsPurchaseActions;

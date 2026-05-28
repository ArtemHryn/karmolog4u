import { base_url } from '@/helper/consts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const declinePayment = async (token: string, paymentId: string) => {
  const res = await fetch(`${base_url}/admin/payments/decline/${paymentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
  });

  const parsedData = await res.json();

  if (!res.ok) {
    const message = Array.isArray(parsedData?.message)
      ? parsedData.message[0]
      : parsedData?.message || 'Помилка додавання користувача';
    console.log(message);

    throw new Error(message);
  }

  return parsedData;
};

const useDeclinePayment = (token: string, id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (paymentId: string) => declinePayment(token, paymentId),
    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: ['user_payments', id] });
      toast.success(`Успішно відхилено "${data.productName}"`);
    },
    onError(error) {
      toast.error(error.message);
    },
  });
};

export default useDeclinePayment;

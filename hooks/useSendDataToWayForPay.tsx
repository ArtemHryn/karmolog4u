import { base_url } from '@/helper/consts';
import paymentWFPForm from '@/helper/education/paymentWFPForm';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const sendCustomerInfo = async (data: Record<string, string>, token: string, gift: boolean) => {
  const link = gift ? 'payments/product/gift/create' : 'payments/product/create';
  const res = await fetch(`${base_url}/${link}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json();
    let message = 'Помилка при створенні замовлення';
    if (errorData?.message) {
      message = Array.isArray(errorData.message) ? errorData.message.join(', ') : errorData.message;
      throw new Error(message);
    }
  }
  return res.json();
};

const useSendDataToWayForPay = (token: string, gift: boolean = false) => {
  return useMutation({
    mutationFn: (data: Record<string, string>) => sendCustomerInfo(data, token, gift),
    onSuccess: paymentWFPForm,
    onError: err => toast.error(err.message),
  });
};

export default useSendDataToWayForPay;

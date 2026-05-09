import { base_url } from '@/helper/consts';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const sendCustomerInfo = async (data: Record<string, string>, token: string) => {
  const res = await fetch(`${base_url}/payments/product/create`, {
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

const useSendDataToWayForPay = (token: string) => {
  return useMutation({
    mutationFn: (data: Record<string, string>) => sendCustomerInfo(data, token),
    onSuccess: data => {
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = data.paymentUrl;

      Object.entries(data.formData).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = String(value);
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    },
    onError: err => toast.error(err.message),
  });
};

export default useSendDataToWayForPay;

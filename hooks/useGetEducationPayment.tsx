import { base_url } from '@/helper/consts';
import paymentWFPForm from '@/helper/education/paymentWFPForm';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

type QueryParams = {
  id: string;
  type: 'course' | 'practice';
};

const sendCustomerInfo = async (id: string, token: string, type: 'course' | 'practice') => {
  const routes = {
    course: 'payments/education/create',
    practice: 'payments/education/create/practice',
  };
  const res = await fetch(`${base_url}/${routes[type]}/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
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

const useGetEducationPayment = (token: string) => {
  return useMutation({
    mutationFn: ({ id, type }: QueryParams) => sendCustomerInfo(id, token, type),
    onSuccess: paymentWFPForm,
    onError: (er: { message: string }) => toast.error(er.message),
  });
};

export default useGetEducationPayment;

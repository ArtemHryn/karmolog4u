import { base_url } from '../consts';

type AgreePayload = {
  data: Record<string, string>;
  token: string;
  id: string;
};

const getAgreementData = async (id: string, token: string) => {
  const res = await fetch(`${base_url}/contract/get/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    const errorMessage = await res.json();
    throw new Error(errorMessage.message || 'Помилка отримання даних договору');
  }
  return res.json();
};

const fetchAgreeToAgreement = async ({ data, token, id }: AgreePayload) => {
  const res = await fetch(`${base_url}/contract/sign/${id}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const errorMessage = await res.json();
    throw new Error(errorMessage.message || 'Помилка відписання договору');
  }
  return res.json();
};

export { getAgreementData, fetchAgreeToAgreement };

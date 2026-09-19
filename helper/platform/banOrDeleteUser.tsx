import { base_url } from '../consts';

interface BanOrDeleteAccount {
  token: string;
  id: string;
  action: string;
}

export const banOrDeleteAccount = async ({ token, id, action }: BanOrDeleteAccount) => {
  const link = `${base_url}/admin/user/${action === 'ban' ? 'block' : 'delete'}`;
  const res = await fetch(link, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify({ users: [id] }),
  });
  const parsedData = await res.json();

  if (!res.ok) {
    const message =
      parsedData?.message[0] ||
      parsedData?.message ||
      `Помилка ${action === 'ban' ? 'блокування' : 'видалення'} користувача`;
    throw new Error(message);
  }

  return parsedData;
};

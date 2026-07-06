import { base_url } from '../consts';

export const fetchEvents = async ({ from, to, token }: { from?: string; to?: string; token: string }) => {
  const params = new URLSearchParams();

  if (from) params.set('from', from);
  if (to) params.set('to', to);

  const res = await fetch(`${base_url}/user/events/all?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('');
  }
  return res.json();
};

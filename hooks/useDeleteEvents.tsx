import { base_url } from '@/helper/consts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const deleteEvents = async (ids: string[], token: string) => {
  const res = await fetch(`${base_url}/admin/events/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ids }),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(
      Array.isArray(errorData.message)
        ? errorData?.message?.join(', ')
        : errorData?.message || 'Помилка при видаленні подій'
    );
  }
  return res.json();
};

const useDeleteEvents = ({ token, status }: { token: string; status: string }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (ids: string[]) => deleteEvents(ids, token),
    onSuccess: () => {
      toast.success('Успішно', { autoClose: 1500 });
      queryClient.invalidateQueries({ queryKey: ['events', status] });
    },
    onError: error => toast.error(error.message || 'Помилка при видаленні'),
  });
};

export default useDeleteEvents;

import { base_url } from '@/helper/consts';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

interface CertDownloadingProps {
  token: string;
  id: string;
  user: string;
}

export const useCertDownloading = ({ token, id, user }: CertDownloadingProps) => {
  const mutation = useMutation({
    mutationFn: async () => {
      if (!token || !id) throw new Error('Вкажіть токен та ID');
      const res = await fetch(`${base_url}/user/education/certificate/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Помилка при завантаженні Сертифікату');
      }
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `${user}_сертифікат.pdf`;
      link.click();

      window.URL.revokeObjectURL(url);
      return true;
    },
    onError: (error: any) => {
      toast.error(error.message || 'Помилка при завантаженні файлу');
    },
    onSuccess: () => {
      toast.success('Файл завантажується');
    },
  });
  return { downloadCert: () => mutation.mutate(), isPending: mutation.isPending };
};

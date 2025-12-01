import { useMutation } from '@tanstack/react-query';
import { base_url } from '@/helper/consts';
import { toast } from 'react-toastify';

interface FileItems {
  originalName: string;
  savedName: string;
}

export const useFileDownload = (token: string) => {
  const mutation = useMutation({
    mutationFn: async (file: FileItems) => {
      if (!file) throw new Error('Невірні дані файлу');

      const response = await fetch(`${base_url}/file/${file.savedName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Помилка при завантаженні файлу');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = file.originalName;
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

  return mutation;
};

import { base_url } from '@/helper/consts';
import { toast } from 'react-toastify';

interface FileItems {
  originalName: string;
  savedName: string;
}

export const useFileDownload = (token: string) => {
  const downloadFile = async (file: FileItems) => {
    if (!file) {
      toast.error('Невірні дані файлу');
      return;
    }
    try {
      const response = await fetch(`${base_url}/file/${file.savedName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        toast.error('Помилка при завантаженні файлу');
        return;
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = file.originalName;
      link.click();

      window.URL.revokeObjectURL(url);
    } catch (e) {
      toast.error('Помилка при завантаженні файлу');
    }
  };
  return { downloadFile };
};

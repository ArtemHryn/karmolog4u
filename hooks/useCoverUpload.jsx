import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { base_url } from '../helper/consts';

const uploadImage = async ({ file, token }) => {
  const formData = new FormData();
  formData.append('image', file);
  const url = `${base_url}/uploadCover`;
  const uploadRes = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  if (!uploadRes.ok) {
    const errorMessage = await uploadRes.json();
    throw new Error(errorMessage.message || 'Не вдалося надіслати картинку');
  }

  return uploadRes.json();
};

const useCoverUpload = setValue => {
  return useMutation({
    mutationFn: uploadImage,
    onSuccess: data => {
      setValue('cover', data.link);
    },
    onError: err => {
      toast.error(`Помилка: ${err.message} test`);
    },
  });
};

export default useCoverUpload;

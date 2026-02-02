'use client';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useMutation } from '@tanstack/react-query';
import { base_url } from '@/helper/consts';
import { toast } from 'react-toastify';

import styles from './DownloadButton.module.scss';

const onDownloadAgreement = async (course: string, token: string) => {
  const response = await fetch(`${base_url}/contract/download/${course}`, {
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
  link.download = 'agreement.pdf';
  link.click();

  window.URL.revokeObjectURL(url);
  return true;
};

const DownloadButton = () => {
  const { data: token } = useSession();
  const params = useParams();
  const mutation = useMutation({
    mutationFn: async () =>
      onDownloadAgreement(params.course_id as string, token?.accessToken as string),
    onError: (error: any) => {
      toast.error(error.message || 'Помилка при завантаженні файлу');
    },
    onSuccess: () => {
      toast.success('Файл завантажується');
    },
  });
  return (
    <button type="button" onClick={() => mutation.mutate()} className={styles.button}>
      <svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 13C15.55 13 16 13.45 16 14V16C16 16.55 15.55 17 15 17H1C0.45 17 0 16.55 0 16V14C0 13.45 0.45 13 1 13C1.55 13 2 13.45 2 14V15H14V14C14 13.45 14.45 13 15 13ZM8 0C8.553 0 9 0.448 9 1V8.99902L11.4004 7.2002C11.8424 6.86733 12.4688 6.95844 12.7998 7.40039C13.1317 7.84238 13.0416 8.46884 12.5996 8.7998L8.59961 11.7998C8.42264 11.9327 8.21094 12 8 12C7.79901 12 7.5978 11.9393 7.4248 11.8184L3.4248 9.00391C2.97308 8.68596 2.86402 8.06224 3.18164 7.61133C3.49964 7.15933 4.1232 7.05016 4.5752 7.36816L7.00293 9.0752C7.00108 9.05037 7 9.0253 7 9V1C7 0.448 7.447 0 8 0Z"
          fill="#101010"
        />
      </svg>
    </button>
  );
};

export default DownloadButton;

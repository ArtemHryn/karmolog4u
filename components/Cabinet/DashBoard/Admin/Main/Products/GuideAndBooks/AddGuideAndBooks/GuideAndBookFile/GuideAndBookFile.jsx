import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useFormContext } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { base_url } from '@/helper/consts';

import styles from './GuideAndBookFile.module.scss';

const uploadFile = async ({ file, token }) => {
  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch(`${base_url}/uploadFiles`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Не вдалося завантажити файл');
  }

  return res.json();
};

const GuideAndBookFile = ({ serverFile }) => {
  const [file, setFile] = useState(serverFile || null);
  const {
    register,
    setValue,
    setError,
    formState: { errors },
  } = useFormContext();
  const { data: token } = useSession();

  const mutation = useMutation({
    mutationFn: file => uploadFile({ file, token: token.accessToken }),
    onSuccess: data => {
      setValue('file', data.uploaded[0], { shouldValidate: false });
    },
    onError: err => {
      toast.error(`Помилка: ${err.message}`);
      setError('file', { type: 'manual', message: err.message });
    },
  });

  const handleFileChange = e => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile.name);
    mutation.mutate(selectedFile);
  };

  const handleFileRemove = e => {
    e.stopPropagation();
    e.preventDefault();
    setFile(null);
    setValue('file', null);
  };

  return (
    <label className={styles.label} onClick={e => e.stopPropagation()}>
      Файл
      <p className={`${styles.file_label} ${errors.file ? styles.error : ''}`}>
        {file}
        {file && (
          <button className={styles.delete_button} onClick={handleFileRemove} type="button">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.delete_icon}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.94283 8.00017L11.8048 5.13817C12.0655 4.8775 12.0655 4.45617 11.8048 4.1955C11.5442 3.93483 11.1228 3.93483 10.8622 4.1955L8.00017 7.0575L5.13817 4.1955C4.8775 3.93483 4.45617 3.93483 4.1955 4.1955C3.93483 4.45617 3.93483 4.8775 4.1955 5.13817L7.0575 8.00017L4.1955 10.8622C3.93483 11.1228 3.93483 11.5442 4.1955 11.8048C4.3255 11.9348 4.49617 12.0002 4.66683 12.0002C4.8375 12.0002 5.00817 11.9348 5.13817 11.8048L8.00017 8.94283L10.8622 11.8048C10.9922 11.9348 11.1628 12.0002 11.3335 12.0002C11.5042 12.0002 11.6748 11.9348 11.8048 11.8048C12.0655 11.5442 12.0655 11.1228 11.8048 10.8622L8.94283 8.00017Z"
                fill="#6C6C6C"
              />
            </svg>
          </button>
        )}
      </p>
      <input
        type="file"
        className={styles.file_input}
        {...register('file')}
        onChange={handleFileChange}
      />
    </label>
  );
};

export default GuideAndBookFile;

import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { base_url } from '@/helper/consts';

import styles from './CoverWithPrice.module.scss';
import 'react-toastify/dist/ReactToastify.css';

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

const ImageInput = () => {
  const { register, setValue, watch } = useFormContext();
  const { data: token } = useSession();

  const imageUrl = watch('cover');

  const mutation = useMutation({
    mutationFn: uploadImage,
    onSuccess: data => {
      setValue('cover', data.link);
    },
    onError: err => {
      toast.error(`Помилка: ${err.message} test`);
    },
  });

  const handleFileChange = async e => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      await mutation.mutateAsync({ file, token: token?.accessToken });
    } catch (error) {
      toast.error(`Помилка: ${error.message}`);
    }
  };

  const isUrl = typeof imageUrl === 'string' && imageUrl.startsWith('http');

  return (
    <>
      <label className={styles.img_label}>
        {isUrl ? (
          <div className={`${styles.image_wrapper}`}>
            <Image width={140} height={140} alt="cover" src={imageUrl} className={styles.image} />
          </div>
        ) : (
          <div className={`${styles.image_wrapper} ${styles.no_image}`}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 11V6H11V11H6V13H11V18H13V13H18V11H13Z" fill="#2961E0" />
            </svg>
            <p className={styles.add_image_text}>
              {mutation.isPending ? 'Файл завантажується' : 'Додати обкладинку курсу'}
            </p>
          </div>
        )}
        <input
          type="file"
          accept="image/png, image/wepb, image/jpeg"
          hidden
          {...register('cover', { onChange: handleFileChange })}
        />
      </label>
    </>
  );
};

export default ImageInput;

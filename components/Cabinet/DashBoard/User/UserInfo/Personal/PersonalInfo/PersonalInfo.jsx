'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { useMutation } from '@tanstack/react-query';
import { inter } from '@/app/[locale]/layout';
import SubmitButtons from './SubmitButtons';
import { base_url } from '@/helper/consts';

import styles from './PersonalInfo.module.scss';
import { toast } from 'react-toastify';

const updateUserInfo = async (data, token) => {
  const response = await fetch(`${base_url}/user/update`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const parsedResponse = await response.json();
  if (!response.ok) {
    const message = parsedResponse?.message || 'Помилка при оновленні даних користувача';
    throw new Error(message);
  }
  return parsedResponse;
};

const PersonalInfo = ({ user: { name, lastName, email, mobPhone } }) => {
  const router = useRouter();
  const { data: userInfo, update } = useSession();
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: { name, email, lastName, mobPhone },
  });

  const mutation = useMutation({
    mutationFn: data => updateUserInfo(data, userInfo.accessToken),
    onSuccess: () => {
      update();
      router.refresh();
    },
    onError: error => {
      console.error('Error updating user info:', error);
      toast.error(error || 'Помилка при оновленні даних користувача');
    },
  });

  const onSubmit = data => {
    mutation.mutate({ ...data, cover: '' });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.main_wrapper}>
        <div className={styles.name_last_name_wrapper}>
          <p className={styles.label}>{"1. Ім'я та прізвище"}</p>
          <input
            type="text"
            {...register('name', { required: true })}
            className={`${styles.input} ${inter.className} ${
              formState.errors.name ? styles.error : ''
            }`}
          />
          <input
            type="text"
            {...register('lastName', { required: true })}
            className={`${styles.input} ${inter.className} ${
              formState.errors.lastName ? styles.error : ''
            }`}
          />
        </div>
        <div className={styles.name_last_name_wrapper}>
          <p className={styles.label}>{'2. Електронна пошта та телефон'}</p>
          <input
            type="email"
            {...register('email', {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Введіть коректний email',
              },
            })}
            className={`${styles.input} ${inter.className} ${
              formState.errors.email ? styles.error : ''
            }`}
          />
          <input
            type="text"
            {...register('mobPhone', {
              minLength: {
                value: 12,
                message: 'Номер телефону має містити 12 цифр',
              },
            })}
            className={`${styles.input} ${inter.className} ${
              formState.errors.mobPhone ? styles.error : ''
            }`}
          />
        </div>
      </div>
      {formState.isDirty && <SubmitButtons reset={reset} />}
    </form>
  );
};

export default PersonalInfo;

'use client';

import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import FormHeader from '../FormHeader/FormHeader';
import { base_url } from '@/helper/consts';

import styles from './SendVerifyAgain.module.scss';

const resendVerification = async email => {
  const res = await fetch(`${base_url}/auth/resend-verification`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    const errorMessage = await res.json();
    throw new Error(errorMessage.message || 'Не вдалося надіслати дані');
  }

  return res.json();
};

const SendVerifyAgain = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const mutation = useMutation({
    mutationFn: data => resendVerification(data.email),
    onSuccess: () => {
      toast.success('Токен успішно надіслано', { autoClose: 1000 });
      reset();
      setTimeout(() => router.push('/cabinet/login'), 1500);
    },
    onError: err => {
      toast.error(`Помилка: `, err);
      console.log(err);
    },
  });

  const onFormSubmit = data => {
    mutation.mutate(data);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
        <FormHeader title={'Відправити код верифікації'} />
        <p className={styles.about_reset}>
          Щоб повторно отримати посилання, введіть адресу електронної пошти, яку ви використовували
          для реєстрації
        </p>
        <div className={styles.labels_wrapper}>
          <label className={styles.label}>
            <p className={styles.label_text}>Email</p>
            <input
              className={`${styles.input} ${errors.email ? styles.error : ''}`}
              type="text"
              {...register('email', {
                required: 'Поле не може бути порожнім',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Будь ласка, введіть коректну адресу електронної пошти',
                },
              })}
            />
          </label>
        </div>

        <button type="submit" className={styles.button}>
          Відправити код
        </button>

        <p className={styles.link_to_registration}>
          Повернутись до <Link href={'/cabinet/login'}>Входу</Link>
        </p>
      </form>
    </div>
  );
};

export default SendVerifyAgain;

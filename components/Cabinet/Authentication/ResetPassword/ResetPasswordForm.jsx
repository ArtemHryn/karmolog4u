'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { toast } from 'react-toastify';
import FormHeader from '../FormHeader/FormHeader';

import styles from './ResetPassword.module.scss';
import { base_url } from '@/helper/consts';

const resetPassword = async email => {
  const res = await fetch(`${base_url}/auth/reset-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Не вдалося надіслати дані');
  }

  return data;
};

const ResetPasswordForm = () => {
  const router = useRouter();
  const t = useTranslations('Author_products.buy_gift_modal');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: data => resetPassword(data.email),
    onSuccess: () => {
      toast.success('Пароль успішно надіслано', { autoClose: 1000 });
      setTimeout(() => router.push('/cabinet/login'), 1500);
    },
    onError: err => {
      toast.error(`${err.message}`);
    },
  });

  const onFormSubmit = data => {
    mutation.mutate(data);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
        <FormHeader title={'Скинути пароль'} />
        <p className={styles.about_reset}>
          Щоб змінити пароль, введіть адресу електронної пошти, яку ви використовували для
          реєстрації
        </p>
        <div className={styles.labels_wrapper}>
          <label className={styles.label}>
            <p className={styles.label_text}>Email</p>
            <input
              className={`${styles.input} ${errors.email ? styles.error : ''}`}
              type="text"
              {...register('email', {
                required: t('email.empty_error'),
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: t('email.wrong_email_error'),
                },
              })}
            />
          </label>
        </div>

        <button type="submit" className={styles.button}>
          Скинути пароль
        </button>

        <p className={styles.link_to_registration}>
          Повернутись до <Link href={'/cabinet/login'}>Входу</Link>
        </p>
      </form>
    </div>
  );
};

export default ResetPasswordForm;

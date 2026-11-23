'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { signIn } from 'next-auth/react';

import styles from './LoginForm.module.scss';
import ShowPasswordIcon from './ShowPasswordIcon';
import FormHeader from '../FormHeader/FormHeader';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const router = useRouter();
  const t = useTranslations('Author_products.buy_gift_modal');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async data => {
    const { email, password } = data;

    const res = await signIn('credentials', { email, password, redirect: false });

    if (res?.error) {
      if (res.status === 401) toast.error('Неправильний логін або пароль');
      if (res.status === 403) toast.error('Доступ заблоковано');
      return;
    }

    if (res?.url) router.push(res.url);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
        <FormHeader title={'Вхід'} />
        <div className={styles.labels_wrapper}>
          <label className={styles.label}>
            <p className={styles.label_text}>Email</p>
            <input
              className={styles.input}
              placeholder="Введіть ваш email"
              type="text"
              {...register('email', {
                required: t('email.empty_error'),
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: t('email.wrong_email_error'),
                },
              })}
            />
            {errors?.email && <p className={styles.error}>{errors.email.message}</p>}
          </label>
          <label className={styles.label}>
            <p className={styles.label_text}>Пароль</p>
            <input
              className={styles.input}
              placeholder="Введіть ваш пароль"
              type={showPassword ? 'text' : 'password'}
              {...register('password', {
                required: t('email.empty_error'),
                minLength: { value: 8, message: 'мінімум 8 символів' },
              })}
            />
            <ShowPasswordIcon showPassword={showPassword} setShowPassword={setShowPassword} />
            {errors?.password && <p className={styles.error}>{errors.password.message}</p>}
          </label>
        </div>
        {loginError && <p className={styles.error}>{loginError}</p>}
        <Link href={'/cabinet/reset-password'} className={`${styles.forgot_password}`}>
          Забули пароль?
        </Link>
        <button type="submit" className={styles.button}>
          Увійти
        </button>

        <p className={styles.link_to_registration}>
          Немає акаунту? <Link href={'/cabinet/registration'}>Зареєструватись</Link>
        </p>
        <p className={styles.link_to_registration}>
          Уже створений, але не <Link href={'/cabinet/resent-verification'}>Верифікований?</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

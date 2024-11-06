'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import BackgroundLogo from '@components/Cabinet/BackgroundLogo/BackgroundLogo';

import styles from './LoginForm.module.scss';
import ShowPasswordIcon from './ShowPasswordIcon';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const t = useTranslations('Author_products.buy_gift_modal');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = data => {
    console.log(data);
  };

  return (
    <div className={styles.wrapper}>
      <BackgroundLogo />
      <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
        <TitleNoStyles styled={styles.title} variant="h1">
          Увійдіть в свій акаунт
        </TitleNoStyles>
        <div className={styles.labels_wrapper}>
          <label className={styles.label}>
            <p className={styles.label_text}>Ваш email</p>
            <input
              className={styles.input}
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
          <label className={styles.label}>
            <p className={styles.label_text}>Пароль</p>
            <button type="button" onClick={() => setShowPassword(prev => !prev)}>
              <ShowPasswordIcon showPassword={showPassword} />
            </button>
            <input
              className={styles.input}
              type={showPassword ? 'text' : 'password'}
              {...register('password', {
                required: t('email.empty_error'),
                minLength: { value: 8, message: 'мінімум 8 символів' },
              })}
            />
          </label>
        </div>
        <Link href={'#'} className={`${styles.forgot_password}`}>
          Забули пароль?
        </Link>
        <button type="submit" className={styles.button}>
          Увійти
        </button>

        <p className={styles.link_to_registration}>
          Бажаєте створити акаунт? <Link href={'/cabinet/registration'}>Створити акаунт</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

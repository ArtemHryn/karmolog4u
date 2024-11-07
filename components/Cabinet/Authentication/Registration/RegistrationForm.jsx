'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import BackgroundLogo from '@components/Cabinet/BackgroundLogo/BackgroundLogo';

import styles from './RegistrationForm.module.scss';
import ShowPasswordIcon from './ShowPasswordIcon';

const RegistrationForm = () => {
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
          Створіть свій акаунт
        </TitleNoStyles>

        <div className={styles.labels_wrapper}>
          <label className={styles.label}>
            <p className={styles.label_text}>Ваше Ім’я</p>
            <input
              className={styles.input}
              type="text"
              {...register('name', { required: t('email.empty_error') })}
            />
          </label>
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
            <input
              className={styles.input}
              type={showPassword ? 'text' : 'password'}
              {...register('password', {
                required: t('email.empty_error'),
                minLength: { value: 8, message: 'мінімум 8 символів' },
              })}
            />
            <button type="button" onClick={() => setShowPassword(prev => !prev)}>
              <ShowPasswordIcon showPassword={showPassword} />
            </button>
          </label>
        </div>
        <button type="submit" className={styles.button}>
          Створити
        </button>

        <p className={styles.link_to_registration}>
          Вже маєте акаунт? <Link href={'/cabinet/login'}>Увійти в акаунт</Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;

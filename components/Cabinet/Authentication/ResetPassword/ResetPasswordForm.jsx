'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import BackgroundLogo from '@components/Cabinet/BackgroundLogo/BackgroundLogo';

import styles from './ResetPassword.module.scss';

const ResetPasswordForm = () => {
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
          Скидання пароля
        </TitleNoStyles>
        <p className={styles.about_reset}>
          Щоб змінити пароль, введіть адресу електронної пошти, яку ви використовували для
          реєстрації
        </p>
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
        </div>

        <button type="submit" className={styles.button}>
          Скинути пароль
        </button>

        <p className={styles.link_to_registration}>
          <Link href={'/cabinet/login'}>Увійти в акаунт</Link>
          <Link href={'/cabinet/registration'}>Створити акаунт</Link>
        </p>
      </form>
    </div>
  );
};

export default ResetPasswordForm;

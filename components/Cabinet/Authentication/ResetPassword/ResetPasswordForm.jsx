'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

import styles from './ResetPassword.module.scss';
import FormHeader from '../FormHeader/FormHeader';

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
          Повернутись до <Link href={'/cabinet/login'}>Входу</Link>
        </p>
      </form>
    </div>
  );
};

export default ResetPasswordForm;

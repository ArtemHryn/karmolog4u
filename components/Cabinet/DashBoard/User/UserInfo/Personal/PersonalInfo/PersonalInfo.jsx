'use client';
import { useForm } from 'react-hook-form';

import styles from './PersonalInfo.module.scss';
import { inter } from '@/app/[locale]/layout';
import SubmitButtons from './SubmitButtons';

const PersonalInfo = ({ user: { name, lastName, email, mobPhone } }) => {
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: { name, email, lastName, mobPhone },
  });

  const onSubmit = data => {
    console.log(data);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.name_last_name_wrapper}>
        <p className={styles.label}>{"1. Ім'я та прізвище"}</p>
        <input
          type="text"
          {...register('name', { required: true })}
          className={`${styles.input} ${inter.className}`}
        />
        <input
          type="text"
          {...register('lastName', { required: true })}
          className={`${styles.input} ${inter.className}`}
        />
      </div>
      <label className={styles.label}>
        2. Електронна пошта
        <input
          type="email"
          {...register('email', { required: true })}
          className={`${styles.input} ${inter.className}`}
        />
      </label>
      <label className={styles.label}>
        3. Мобільний телефон
        <input
          type="email"
          {...register('mobPhone', {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Введіть коректний email',
            },
          })}
          className={`${styles.input} ${inter.className}`}
        />
      </label>
      {formState.isDirty && <SubmitButtons reset={reset} />}
    </form>
  );
};

export default PersonalInfo;

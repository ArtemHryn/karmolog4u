'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import FormHeader from '../FormHeader/FormHeader';

import styles from './SendVerifyAgain.module.scss';

const SendVerifyAgain = () => {
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
        <FormHeader title={'Відправити код верифікації'} />
        <p className={styles.about_reset}>
          Щоб повторно отримати посилання, введіть адресу електронної пошти, яку ви використовували
          для реєстрації
        </p>
        <div className={styles.labels_wrapper}>
          <label className={styles.label}>
            <p className={styles.label_text}>Email</p>
            <input
              className={styles.input}
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

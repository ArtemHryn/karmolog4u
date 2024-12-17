'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import PhoneInput from 'react-phone-input-2';

import FormHeader from '../FormHeader/FormHeader';
import ShowPasswordIcon from '../Login/ShowPasswordIcon';

import styles from './RegistrationForm.module.scss';
import 'react-phone-input-2/lib/bootstrap.css';
import { base_url } from '@helper/consts';

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()
  const t = useTranslations('Author_products.buy_gift_modal');

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onFormSubmit = async data => {
    try {
      const response = await fetch(`${base_url}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data }),
      });
      if (!response.ok) {
        console.log('not ok');
      }
      router.push('/cabinet/login')
    } catch (error) {
      console.log(error.json());
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
        <FormHeader title={'Реєстрація'} />
        <div className={styles.labels_wrapper}>
          <div className={`${styles.labels_wrapper} ${styles.customer_name_wrapper}`}>
            {/* name */}
            <label className={styles.label}>
              <p className={styles.label_text}>Ім’я</p>
              <input
                className={styles.input}
                placeholder="Ваше ім’я"
                type="text"
                {...register('name', { required: t('email.empty_error') })}
              />
            </label>
            {/* lastname */}
            <label className={styles.label}>
              <p className={styles.label_text}>Прізвище</p>
              <input
                className={styles.input}
                placeholder="Ваше прізвище"
                type="text"
                {...register('lastName', { required: t('email.empty_error') })}
              />
            </label>
          </div>
          {/* email */}
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
          </label>
          {/* phone */}
          <label className={styles.label}>
            <p className={styles.label_text}>Номер телефону</p>
            <Controller
              name="mobPhone"
              control={control}
              rules={{
                minLength: {
                  value: 12,
                  message: t('phone.min_length_error'),
                },
                required: { value: true, message: t('phone.empty_number_error') },
              }}
              render={({ field }) => (
                <PhoneInput
                  country={'ua'}
                  value={field.value}
                  placeholder="(99) 999-99-99"
                  onChange={phone => field.onChange(phone)}
                  prefix="+"
                  defaultMask="(...) ...-..-.."
                  className={styles.phone}
                  inputClass={styles.flagInput}
                  buttonClass={styles.buttonClass}
                  dropdownClass={styles.dropdownClass}
                />
              )}
            />
          </label>
          {/* password */}
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
            <button type="button" onClick={() => setShowPassword(prev => !prev)}>
              <ShowPasswordIcon showPassword={showPassword} />
            </button>
          </label>
        </div>
        <button type="submit" className={styles.button}>
          Створити акаунт
        </button>

        <p className={styles.link_to_login}>
          Вже маєте акаунт? <Link href={'/cabinet/login'}>Увійти в акаунт</Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;

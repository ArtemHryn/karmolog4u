import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { useForm, Controller } from 'react-hook-form';

import styles from './ModalBuyForm.module.scss';
import 'react-phone-input-2/lib/bootstrap.css';
import Title from '@/components/Common/Title/Title';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Form = ({ price }) => {
  const [license, setLicense] = useState(false);
  const t = useTranslations('Author_products.buy_product_modal');

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onFormSubmit = data => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
      <Title variant="p" styled={styles.form_title}>
        {t('enter_your_info')}
      </Title>
      <div className={styles.inputGroup}>
        <input
          type="text"
          id="name"
          className={styles.input}
          placeholder=" "
          {...register('name')}
        />
        <label htmlFor="name" className={styles.label}>
          {t('name')}
        </label>
      </div>
      <div className={styles.inputGroup}>
        <input
          type="email"
          id="email"
          className={styles.input}
          placeholder=" "
          {...register('email', {
            required: t('email.empty_error'),
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: t('email.wrong_email_error'),
            },
          })}
        />
        <label htmlFor="email" className={styles.label}>
          {t('email.email')}
        </label>
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>
      <div>
        <p>{t('phone.phone')}</p>
        <Controller
          name="phone"
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
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
      </div>

      <div className={styles.checkbox_wrapper}>
        <input
          type="checkbox"
          id="license"
          checked={license}
          onChange={e => setLicense(e.target.checked)}
        />
        <label htmlFor="license">
          <svg viewBox="0,0,50,50">
            <path d="M5 30 L 20 45 L 45 5"></path>
          </svg>
        </label>
        <p className={styles.text}>
          {t('license.part1')}{' '}
          <Link href={'/'} target="_blank">
            {t('license.part2')}
          </Link>{' '}
          {t('license.part3')}{' '}
          <Link href={'/'} target="_blank">
            {t('license.part4')}
          </Link>
        </p>
      </div>
      <Title variant="p" styled={styles.form_price}>
        {t('price')}:<span>{price}</span>
      </Title>
      <button type="submit" className={styles.submit_btn} disabled={!license}>
        {t('button')}
      </button>
    </form>
  );
};

export default Form;

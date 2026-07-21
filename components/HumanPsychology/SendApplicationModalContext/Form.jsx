'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Link from 'next/link';
import PhoneInput from 'react-phone-input-2';
import TextMaskInput from 'react-text-mask';
import { useRouter } from 'next/navigation';

import Field from './Field';

import styles from './SendApplicationModalContext.module.scss';
import 'react-phone-input-2/lib/bootstrap.css';
import { useMutation } from '@tanstack/react-query';
import { base_url } from '../../../helper/consts';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';

const sendApplication = async data => {
  console.log(data);

  const response = await fetch(`${base_url}/send-application`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Помилка при відправці заявки');
  }

  const res = response.json();
  console.log(res);

  return res;
};

const Form = ({ setIsSent }) => {
  const [license, setLicense] = useState(false);
  const router = useRouter();
  const t = useTranslations('Human_psychology.Association.SendAppTo.Form');

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: sendApplication,
    onSuccess: () => {
      setIsSent(true);
      setTimeout(() => router.back(), 2000);
    },
    onError: error => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const onFormSubmit = async data => {
    const { date, phone } = data;
    const [day, month, year] = date.split('.');

    mutation.mutate({
      ...data,
      phone: `+${phone}`,
      date: `${year}-${month}-${day}`,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
      {/* ПІБ */}
      <Field register={register} name={'name'} title={t('name')} error={errors} required={true} />
      {/* ПІБ англ*/}
      <Field
        register={register}
        name={'nameEng'}
        title={t('nameEng')}
        error={errors}
        required={true}
      />
      {/* дата */}
      <Controller
        name="date"
        control={control}
        rules={{
          required: { value: true, message: 'Введіть дату народження' },
          pattern: {
            value: /^\d{2}\.\d{2}\.\d{4}$/,
            message: 'Введіть дату в форматі дд.мм.рррр',
          },
        }}
        render={({ field }) => (
          <div className={styles.inputGroup}>
            <TextMaskInput
              value={field.value}
              onChange={e => field.onChange(e.target.value)}
              mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
              type="text"
              guide={false}
              placeholder="дд.мм.рррр"
              className={`${styles.input} ${styles.input_date}`}
              id="date"
            />{' '}
            <label htmlFor="date" className={styles.label}>
              {t('date')}
            </label>
            {errors.date && <p className={styles.error}>{errors.date.message}</p>}
          </div>
        )}
      />
      {/* моб номер */}
      <div className={styles.number_wrapper}>
        <p>{t('phone')}</p>
        <Controller
          name="phone"
          control={control}
          rules={{
            minLength: {
              value: 12,
              message: 'Введіть номер в форматі (XXX) XXX-XX-XX',
            },
            required: { value: true, message: 'Введіть номер телефону' },
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
      {/* мейл */}
      <div className={styles.inputGroup}>
        <input
          type="email"
          id="email"
          className={styles.input}
          placeholder=" "
          {...register('email', {
            required: 'Будь ласка, введіть email',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Введіть коректний email',
            },
          })}
        />
        <label htmlFor="email" className={styles.label}>
          {t('email')}
        </label>
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>
      {/* ФБ або інста */}
      <Field
        register={register}
        name={'socLink'}
        title={t('socLink')}
        error={errors}
        required={true}
      />
      {/* Освіта */}
      <Field
        register={register}
        name={'education'}
        title={t('education')}
        error={errors}
        required={true}
      />
      {/* Навчання в студії */}
      <Field
        register={register}
        name={'educationInStudio'}
        title={t('educationInStudio')}
        error={errors}
        required={true}
      />
      {/* курси */}
      <Field
        register={register}
        name={'courses'}
        title={t('courses')}
        error={errors}
        required={true}
      />
      {/* аспірантура */}
      <Field
        register={register}
        name={'graduateSchool'}
        title={'Навчання в аспірантурі/докторантурі'}
        error={errors}
        required={true}
      />
      {/* робота */}
      <Field register={register} name={'work'} title={t('work')} error={errors} required={true} />
      {/* наукові інтереси */}
      <Field
        register={register}
        name={'interesting'}
        title={t('interesting')}
        error={errors}
        required={true}
      />
      {/* інші членства */}
      <Field
        register={register}
        name={'otherMemberships'}
        title={t('otherMemberships')}
        error={errors}
        required={true}
      />
      {/* мотивація для вступу */}
      <div className={styles.inputGroup}>
        <textarea
          rows={4}
          type="text"
          id="motivation"
          className={styles.textArea}
          placeholder=" "
          {...register('motivation', {
            required: 'Заповніть поле',
          })}
        />
        <label htmlFor="motivation" className={styles.label}>
          {t('motivation')}
        </label>
        {errors.otherMemberships && (
          <p className={styles.error}>{errors.otherMemberships.message}</p>
        )}
      </div>
      <div className={styles.inputGroup}>
        <textarea
          rows={4}
          type="text"
          id="comment"
          className={styles.textArea}
          placeholder=" "
          {...register('comment')}
        />
        <label htmlFor="comment" className={styles.label}>
          {t('comment')}
        </label>
        {errors.otherMemberships && (
          <p className={styles.error}>{errors.otherMemberships.message}</p>
        )}
      </div>
      {/* ліцензія */}
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
          {t('license1')}{' '}
          <Link href={'/'} target="_blank">
            {t('license2')}
          </Link>{' '}
          та{' '}
          <Link href={'/'} target="_blank">
            {t('license3')}
          </Link>
        </p>
      </div>
      <button type="submit" className={styles.submit_btn} disabled={!license || mutation.isPending}>
        {mutation.isPending ? t('button_sending') : `${t('send')}`}
      </button>
    </form>
  );
};

export default Form;

import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import TextMaskInput from 'react-text-mask';

import { open_Sans } from '@/app/[locale]//layout';

import styles from './GroupMatrixForm.module.scss';
import { useTranslations } from 'next-intl';

const GroupMatrixForm = ({ usersInfo, setUsersInfo, setIsShowMatrix }) => {
  const router = useRouter();
  const t = useTranslations('Calculator.group');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      info:
        usersInfo && usersInfo.length === 0
          ? [
              { date: '', name: '' },
              { date: '', name: '' },
              { date: '', name: '' },
            ]
          : usersInfo,
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: 'info',
    control,
  });

  const onSubmit = data => {
    const url = data.info.map((el, index) => {
      return `date${index + 1}=${encodeURIComponent(el.date)}`;
    });
    setUsersInfo(data.info);
    setIsShowMatrix(true);

    router.push(`/calculator/groups-of-people-matrix?${url.join('&')}`, {
      scroll: false,
    });
  };
  const isHiddenButton = fields.length >= 9;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.input_wrapper}>
        {fields.map((field, index) => (
          <div key={field.id} className={styles.controller}>
            <Controller
              name={`info.${index}.date`}
              control={control}
              rules={{
                required: { value: true, message: t('empty_d_date_error') },
                pattern: {
                  value: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
                  message: 'Введіть дату в форматі дд.мм.рррр',
                },
              }}
              render={({ field }) => (
                <div className={styles.date_wrapper}>
                  <label htmlFor="date" className={styles.date_label}>
                    {t('b_date')}
                  </label>
                  <TextMaskInput
                    value={field.value}
                    onChange={e => field.onChange(e.target.value)}
                    mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
                    type="text"
                    guide={false}
                    placeholder={t('b_date_placeholder')}
                    id="date"
                    className={styles.date_input}
                  />{' '}
                  {index >= 3 && (
                    <button
                      className={`${styles.close_btn}`}
                      onClick={() => remove(index)}
                      type="button"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none">
                        <path d="M7 5V0H5V5H0V7H5V12H7V7H12V5H7Z" fill="#FDFDFD" />
                      </svg>
                    </button>
                  )}
                </div>
              )}
            />
            {errors.info && errors.info[index] && (
              <p className={styles.error}>{errors.info[index].date.message}</p>
            )}
          </div>
        ))}
        {!isHiddenButton && (
          <button
            className={`${styles.add_more_btn} ${open_Sans.className}`}
            onClick={() => append()}
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none">
              <path d="M7 5V0H5V5H0V7H5V12H7V7H12V5H7Z" fill="#FDFDFD" />
            </svg>
            {t('add_more')}
          </button>
        )}
      </div>
      <button type="submit" className={`${styles.submit_btn} ${open_Sans.className}`}>
        {t('calc_button')}
      </button>
    </form>
  );
};

export default GroupMatrixForm;

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import TextMaskInput from 'react-text-mask';
import { Dropdown } from 'primereact/dropdown';
import { ageCalculator, getCurrentAgeInPeriod, getRoute } from '@helper/calculator/ageCalc';
import { open_Sans } from '@app/[locale]//layout';

import styles from './YearMatrixForm.module.scss';
import './period.scss';
import { useTranslations } from 'next-intl';

const getPeriods = () => {
  const periods = [];
  for (let i = 0; i < 80; i += 1.25) {
    const element = { period: `${i} - ${i + 1.25}`, value: i };
    periods.push(element);
  }
  return periods;
};

const periodList = getPeriods();

const YearMatrixForm = ({
  setDate,
  setName,
  setIsShowMatrix,
  name,
  date,
  redirectTo,
  setPeriod,
  period,
}) => {
  const router = useRouter();
  const t = useTranslations('Calculator.year');
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: { name: name || '', date: date || '' },
  });

  const onSubmit = data => {
    setName(data.name);
    setDate(data.date);
    setPeriod(data.period);
    setIsShowMatrix(true);
    router.push(getRoute(data.name, data.date, data.period, redirectTo), {
      scroll: false,
    });
  };

  useEffect(() => {
    if ((period || period === 0) && !getValues('period')) {
      const periodItem = periodList.find(el => el.value === +period);
      setValue('period', periodItem.value);
      return;
    }

    if (!period && !!date) {
      const [day, month, year] = date.split('.');
      const calculatedPeriod = getCurrentAgeInPeriod(ageCalculator(day, month, year), periodList);
      setValue('period', calculatedPeriod.value);
      router.push(getRoute(name, date, calculatedPeriod.value, redirectTo), {
        scroll: false,
      });
    }
  }, [date, getValues, name, period, redirectTo, router, setValue]);

  return (
    <article>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label className={styles.name_label}>
          {t('form_name')}
          <input
            type="text"
            placeholder={t('form_name_placeholder')}
            {...register('name')}
            className={styles.name_input}
          />
        </label>
        <Controller
          name="date"
          control={control}
          rules={{
            required: { value: true, message: t('empty_d_date_error') },
            pattern: {
              value: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
              message: t('incorrect_d_date_error'),
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
              {errors.date && <p className={styles.error}>{errors.date.message}</p>}
            </div>
          )}
        />
        <Controller
          name="period"
          control={control}
          render={({ field }) => (
            <div>
              <Dropdown
                id={field.name}
                value={getValues('period')}
                onChange={e => setValue('period', e.value)}
                options={periodList}
                optionLabel="period"
                placeholder={t('period')}
              />
            </div>
          )}
        />
        <button type="submit" className={`${styles.submit_btn} ${open_Sans.className}`}>
          {t('calc_button')}
        </button>
      </form>
    </article>
  );
};

export default YearMatrixForm;

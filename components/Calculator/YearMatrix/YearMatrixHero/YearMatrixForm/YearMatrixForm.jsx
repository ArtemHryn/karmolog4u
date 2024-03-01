import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import TextMaskInput from 'react-text-mask';
import { Dropdown } from 'primereact/dropdown';

import styles from './YearMatrixForm.module.scss';
import { open_Sans } from '@app/layout';
import './period.scss';

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
    router.push(
      `${redirectTo}?${data.name ? `name=${data.name}&` : ''}date=${data.date}&${
        data.period || data.period === 0 ? `period=${data.period}` : ''
      }`,
      {
        scroll: false,
      }
    );
  };

  useEffect(() => {
    if ((period || period === 0) && !getValues('period')) {
      const periodItem = periodList.find(el => el.value === +period);
      setValue('period', periodItem.value);
      return;
    }
  }, [getValues, period, setValue]);

  return (
    <article>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label className={styles.name_label}>
          Ваше ім’я
          <input
            type="text"
            placeholder="Ім’я"
            {...register('name')}
            className={styles.name_input}
          />
        </label>
        <Controller
          name="date"
          control={control}
          rules={{
            required: { value: true, message: 'Введіть дату народження' },
            pattern: {
              value: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
              message: 'Введіть дату в форматі дд.мм.рррр',
            },
          }}
          render={({ field }) => (
            <div className={styles.date_wrapper}>
              <label htmlFor="date" className={styles.date_label}>
                Дата народження
              </label>
              <TextMaskInput
                value={field.value}
                onChange={e => field.onChange(e.target.value)}
                mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
                type="text"
                guide={false}
                placeholder="дд.мм.рррр"
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
                placeholder="Період року"
              />
            </div>
          )}
        />
        <button type="submit" className={`${styles.submit_btn} ${open_Sans.className}`}>
          Розрахувати матрицю
        </button>
      </form>
    </article>
  );
};

export default YearMatrixForm;

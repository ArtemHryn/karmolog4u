import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import TextMaskInput from 'react-text-mask';

import styles from './SingleDateForm.module.scss';
import { open_Sans } from '@app/layout';

const SingleDateForm = ({ setDate, setName, setIsShowMatrix, name, date }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: { name: name || '', date: date || '' } });

  const onSubmit = data => {
    setName(data.name);
    setDate(data.date);
    setIsShowMatrix(true);
    router.push(`/calculator/personal-matrix-of-fade?name=${data.name}&date=${data.date}`, {
      scroll: false,
    });
  };

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
              {errors.date && <p>{errors.date.message}</p>}
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

export default SingleDateForm;

import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import TextMaskInput from 'react-text-mask';
import { open_Sans } from '@app/layout';

import styles from './DemonMatrixForm.module.scss';

const DemonMatrixForm = ({ setDate, setName, setIsShowMatrix, name, date, redirectTo, code }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { name: name || '', date: date || '', checked: code ? +code : 12 },
  });

  const checked = watch('checked');

  const onSubmit = data => {
    setName(data.name);
    setDate(data.date);
    setIsShowMatrix(true);
    router.push(
      `${redirectTo}?${data.name ? `name=${data.name}&` : ''}date=${data.date}&code=${
        data.checked
      }`,
      {
        scroll: false,
      }
    );
  };

  const handleCheckboxChange = index => {
    setValue('checked', index);
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
              {errors.date && <p className={styles.error}>{errors.date.message}</p>}
            </div>
          )}
        />
        <div className={styles.code}>
          <p className={styles.checkbox_title}>Я хочу розрахувати...</p>
          <div className={styles.checkbox_list}>
            {[12, 13, 14, 15].map(index => (
              <div key={index} className={styles.main_check_wrapper}>
                <div className={styles.checkbox_wrapper}>
                  <input
                    type="checkbox"
                    {...register(`checked_${index}`)}
                    value={index}
                    checked={checked === index}
                    onChange={() => handleCheckboxChange(index)}
                    id={`code_${index}`}
                  />
                  <label htmlFor={`code_${index}`}>
                    <svg viewBox="0,0,50,50">
                      <path d="M5 30 L 20 45 L 45 5"></path>
                    </svg>
                  </label>
                </div>
                {index} Код
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className={`${styles.submit_btn} ${open_Sans.className}`}>
          Розрахувати матрицю
        </button>
      </form>
    </article>
  );
};

export default DemonMatrixForm;

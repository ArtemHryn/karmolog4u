import { Controller, useFormContext } from 'react-hook-form';
import { RadioButton } from 'primereact/radiobutton';
import Calendars from './Calendars';

import styles from './Type.module.scss';

const Period = () => {
  const {
    register,
    formState: { errors },
    setValue,
    control,
    setError,
    watch,
  } = useFormContext();

  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>4. Оберіть тип доступу до курсу:</p>
      <div className={styles.period_data_wrapper}>
        <div>
          <Controller
            name="period"
            control={control}
            defaultValue={'PERMANENT'}
            render={({ field }) => (
              <div className={styles.period_radio_wrapper}>
                <div className={`${styles.radio_wrapper} ${styles.period}`}>
                  <RadioButton
                    id={field.id}
                    inputId="period1"
                    value={'PERMANENT'}
                    checked={field.value === 'PERMANENT'}
                    onChange={e => setValue('period', e.value)}
                  />
                  <label htmlFor="period1" className={styles.name}>
                    Безстроково
                  </label>
                </div>
                <div className={`${styles.radio_wrapper} ${styles.period}`}>
                  <RadioButton
                    id={field.id}
                    inputId="period2"
                    value={'FOR_PERIOD'}
                    checked={field.value === 'FOR_PERIOD'}
                    onChange={e => setValue('period', e.value)}
                  />
                  <label htmlFor="period2" className={styles.name}>
                    На період
                  </label>
                </div>
                <div className={`${styles.radio_wrapper} ${styles.period}`}>
                  <RadioButton
                    id={field.id}
                    inputId="period3"
                    value={'TO_DATE'}
                    checked={field.value === 'TO_DATE'}
                    onChange={e => setValue('period', e.value)}
                  />
                  <label htmlFor="period3" className={styles.name}>
                    До дати
                  </label>
                </div>
              </div>
            )}
          />
        </div>
        {watch('period') === 'TO_DATE' && <Calendars />}
        {watch('period') === 'FOR_PERIOD' && (
          <label className={styles.months_label}>
            На
            <input
              {...register('months', {
                onChange: ({ target }) => {
                  target.value > 100 && setValue('months', 100);
                },
              })}
              className={styles.months_input}
              type="number"
              max={100}
            />
            Місяців
          </label>
        )}
      </div>
    </div>
  );
};

export default Period;

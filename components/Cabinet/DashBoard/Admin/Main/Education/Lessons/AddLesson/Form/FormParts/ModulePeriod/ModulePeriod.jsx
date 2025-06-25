import { Controller, useFormContext } from 'react-hook-form';
import styles from './ModulePeriod.module.scss';
import { inter } from '@/app/[locale]/layout';
import { Calendar } from 'primereact/calendar';

const ModulePeriod = () => {
  const { register, control } = useFormContext();
  return (
    <div className={styles.period_wrapper}>
      <div className={styles.label_wrapper}>
        <label className={styles.label}>
          3. День модулю
          <input
            type="number"
            className={`${styles.input} ${inter.className}`}
            placeholder="Введіть день"
            {...register('module_day')}
          />
        </label>
        <label className={styles.label}>
          4. Номер в дні
          <input
            type="number"
            className={`${styles.input} ${inter.className}`}
            placeholder="Введіть № п/п"
            {...register('module_part')}
          />
        </label>
      </div>
      <div className={styles.main_time_wrapper}>
        <p className={styles.label}>5. Розклад уроку</p>
        <div className={styles.time_wrapper}>
          <Controller
            name="lesson_time_start"
            control={control}
            render={({ field }) => (
              <div className={styles.time_label}>
                <p>Початок</p>
                <Calendar
                  id={field.name}
                  value={field.value}
                  onChange={e => field.onChange(e.value)}
                  timeOnly
                />
              </div>
            )}
          />
          <Controller
            name="lesson_time_end"
            control={control}
            render={({ field }) => (
              <div className={styles.time_label}>
                <p>Закінчення</p>
                <Calendar
                  id={field.name}
                  value={field.value}
                  onChange={e => field.onChange(e.value)}
                  timeOnly
                />
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ModulePeriod;

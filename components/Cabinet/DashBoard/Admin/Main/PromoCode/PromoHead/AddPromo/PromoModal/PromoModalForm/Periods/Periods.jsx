import { Calendar } from 'primereact/calendar';
import { Controller, useFormContext } from 'react-hook-form';
import { addLocale } from 'primereact/api';

import styles from './Periods.module.scss';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css';
import './calendars.scss';

const Periods = () => {
  const { control } = useFormContext();
  addLocale('ua', {
    dayNamesMin: ['Пн', 'Вт', 'Ср', 'Чт', 'Пн', 'Сб', 'Нд'],
    monthNames: [
      'Січень',
      'Лютий',
      'Березень',
      'Квітень',
      'Травень',
      'Червень',
      'Липень',
      'Серпень',
      'Вересень',
      'Жовтень',
      'Листопад',
      'Грудень',
    ],
  });
  return (
    <div className={styles.main_wrapper}>
      <Controller
        name="start"
        control={control}
        defaultValue={new Date()}
        render={({ field }) => (
          <div className={styles.calendar_wrapper}>
            <p className={styles.label}>Дата початку</p>
            <Calendar
              id={field.name}
              value={field.value}
              onChange={e => field.onChange(e.value)}
              dateFormat="dd.mm.yy"
              readOnlyInput
              minDate={new Date()}
              locale="ua"
            />
          </div>
        )}
      />
      <Controller
        name="end"
        control={control}
        defaultValue={new Date(new Date().setDate(new Date().getDate() + 7))}
        render={({ field }) => (
          <div className={styles.calendar_wrapper}>
            <p className={styles.label}>Дата кінця</p>
            <Calendar
              id={field.name}
              value={field.value}
              onChange={e => field.onChange(e.value)}
              dateFormat="dd.mm.yy"
              readOnlyInput
              minDate={new Date()}
              locale="ua"
            />
          </div>
        )}
      />
    </div>
  );
};

export default Periods;

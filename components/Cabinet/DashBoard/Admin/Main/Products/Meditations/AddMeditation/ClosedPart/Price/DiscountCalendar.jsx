import { Controller, useFormContext } from 'react-hook-form';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';

import styles from '../ClosedPart.module.scss';
import './calendars.scss';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';

const DiscountCalendar = () => {
  const { getValues, setValue, control } = useFormContext();
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
    <div className={styles.calendars_wrapper}>
      <p>Срок дії:</p>
      <Controller
        name="start_date"
        control={control}
        defaultValue={new Date()}
        render={({ field }) => (
          <div>
            <Calendar
              id={field.name}
              value={field.value}
              onChange={e => field.onChange(e.value)}
              dateFormat="dd.mm.yy"
              readOnlyInput
              locale="ua"
            />
          </div>
        )}
      />
      <p>-</p>
      <Controller
        name="end_date"
        control={control}
        defaultValue={new Date(new Date().setDate(new Date().getDate() + 7))}
        render={({ field }) => (
          <div>
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

export default DiscountCalendar;

import { Controller, useFormContext } from 'react-hook-form';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import CalendarIcon from './Icons/CalendarIcon';
import Prev from './Icons/Prev';
import Next from './Icons/Next';

import styles from './Type.module.scss';
import './calendars.scss';

const Calendars = () => {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  addLocale('ua', {
    dayNamesMin: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПН', 'СБ', 'НД'],
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
    <div className={styles.calendar_wrapper}>
      <Controller
        name="start_date"
        control={control}
        defaultValue={new Date()}
        render={({ field }) => (
          <div className={styles.calendar_item}>
            <p>З</p>
            <Calendar
              id={field.name}
              value={field.value}
              onChange={e => field.onChange(e.value)}
              dateFormat="dd.mm.yy"
              readOnlyInput
              locale="ua"
              minDate={new Date()}
              nextIcon={<Next />}
              prevIcon={<Prev />}
            />
            <CalendarIcon />
          </div>
        )}
      />
      <Controller
        name="end_date"
        control={control}
        defaultValue={new Date(new Date().setMonth(new Date().getMonth() + 6))}
        render={({ field }) => (
          <div className={styles.calendar_item}>
            <p>До</p>
            <Calendar
              id={field.name}
              value={field.value}
              onChange={e => field.onChange(e.value)}
              dateFormat="dd.mm.yy"
              readOnlyInput
              minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
              locale="ua"
              nextIcon={<Next />}
              prevIcon={<Prev />}
            />
            <CalendarIcon />
          </div>
        )}
      />
    </div>
  );
};

export default Calendars;

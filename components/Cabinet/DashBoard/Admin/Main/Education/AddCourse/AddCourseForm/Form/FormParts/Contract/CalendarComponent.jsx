import { Controller, useFormContext } from 'react-hook-form';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import CalendarIcon from '../Type/Icons/CalendarIcon';
import Next from '../Type/Icons/Next';
import Prev from '../Type/Icons/Prev';

import styles from './Contract.module.scss';
import './calendar.scss';

const CalendarComponent = ({ title, name, isDate }) => {
  const { control, clearErrors, trigger } = useFormContext();
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
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={styles.calendar_wrapper}>
          <p className={styles.calendar_name}>{title}</p>
          <Calendar
            id={field.name}
            value={field.value}
            onChange={e => {
              field.onChange(e.value);
              clearErrors(name);
              trigger(name);
            }}
            dateFormat="dd.mm.yy"
            readOnlyInput
            locale="ua"
            nextIcon={<Next />}
            prevIcon={<Prev />}
            placeholder="Введіть дату"
          />
          <button
            className={`${styles.calendar_icon} ${isDate ? styles.calendar_icon_date : ''}`}
            onClick={() => {
              field.onChange(null);
              clearErrors(name);
              trigger(name);
            }}
          >
            <CalendarIcon />
          </button>
        </div>
      )}
    />
  );
};

export default CalendarComponent;

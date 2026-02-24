import { Controller, useFormContext } from 'react-hook-form';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import Next from './Icons/Next';
import Prev from './Icons/Prev';
import CalendarIcon from './Icons/CalendarIcon';

import styles from './Calenders.module.scss';
import './calendars.scss';

interface DateCalendarProps {
  name: string;
  fieldName: string;
}

const DateCalendar = ({ name, fieldName }: DateCalendarProps) => {
  const { control } = useFormContext();
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
      name={fieldName}
      control={control}
      render={({ field }) => (
        <div className={styles.calendar}>
          <Calendar
            id={field.name}
            value={field.value}
            onChange={e => field.onChange(e.value)}
            dateFormat="dd.mm.yy"
            locale="ua"
            placeholder={name}
            readOnlyInput
            nextIcon={<Next />}
            prevIcon={<Prev />}
          />
          <CalendarIcon styled={styles.icon} />
        </div>
      )}
    />
  );
};

export default DateCalendar;

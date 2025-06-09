import { Controller, useFormContext } from 'react-hook-form';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import Next from '../../../../AddCourse/AddCourseForm/Form/FormParts/Type/Icons/Next';
import Prev from '../../../../AddCourse/AddCourseForm/Form/FormParts/Type/Icons/Prev';
import CalendarIcon from '../../../../AddCourse/AddCourseForm/Form/FormParts/Type/Icons/CalendarIcon';

import styles from './FormParts.module.scss';
import './calendars.scss';

const StartEndDate = () => {
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
    <div className={`${styles.wrapper} ${styles.form_part_wrapper}`}>
      <p className={styles.label}>3. Дати доступу</p>
      <div className={styles.calendars_wrapper}>
        <Controller
          name="start_date"
          control={control}
          defaultValue={new Date()}
          render={({ field }) => (
            <div className={styles.calendar_item}>
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
    </div>
  );
};

export default StartEndDate;

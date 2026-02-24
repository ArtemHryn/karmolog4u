import DateCalendar from './DateCalendar';

import styles from './Calenders.module.scss';

const Calenders = () => {
  return (
    <div className={styles.main_wrapper}>
      <p className={styles.title}>2. Оберіть дату або період:</p>
      <div className={styles.calendars_wrapper}>
        <DateCalendar name="Початок" fieldName="dateStart" />
        <DateCalendar name="Закінчення" fieldName="dateEnd" />
      </div>
    </div>
  );
};

export default Calenders;

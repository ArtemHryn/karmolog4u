import TimeSelector from './TimeSelector/TimeSelector';

import styles from './TimeFrames.module.scss';

const TimeFrames = () => {
  return (
    <div className={styles.main_wrapper}>
      <p className={styles.title}>3. Вкажіть час проведення:</p>
      <div className={styles.time_wrapper}>
        <TimeSelector name="Початок" fieldName="eventTimeStart" />
        <TimeSelector name="Закінчення" fieldName="eventTimeEnd" />
      </div>
    </div>
  );
};

export default TimeFrames;

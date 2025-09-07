import styles from './Events.module.scss';

const NoEvents = () => {
  return (
    <div className={styles.no_events_wrapper}>
      <p className={styles.text_no_events}>Поки у вас немає сповіщень про події!</p>
      <p className={styles.text_no_events}>
        Але не хвилюйтеся — наша команда активно працює над створенням цікавих і корисних заходів.
      </p>
      <p className={styles.text_no_events}>Слідкуйте за оновленнями!</p>
    </div>
  );
};

export default NoEvents;

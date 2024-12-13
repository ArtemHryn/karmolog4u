import styles from './AddMeditationForm.module.scss';

const Tick = ({ register }) => {
  return (
    <div className={styles.checkbox_wrapper}>
      <input type="checkbox" id={`check-51`} {...register('isWaiting')} />
      <label htmlFor={`check-51`}>
        <svg viewBox="0,0,50,50">
          <path d="M5 30 L 20 45 L 45 5"></path>
        </svg>
      </label>
      <p className={styles.text}>Очікується</p>
    </div>
  );
};

export default Tick;

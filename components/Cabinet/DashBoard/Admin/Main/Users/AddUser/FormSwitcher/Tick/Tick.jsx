import styles from './Tick.module.scss';

const Tick = ({ id, name, register, form_name }) => {
  return (
    <div className={styles.checkbox_wrapper}>
      <input type="checkbox" id={`check-${id}`} {...register(form_name)} />
      <label htmlFor={`check-${id}`}>
        <svg viewBox="0,0,50,50">
          <path d="M5 30 L 20 45 L 45 5"></path>
        </svg>
      </label>
      <p className={styles.text}>{name}</p>
    </div>
  );
};

export default Tick;

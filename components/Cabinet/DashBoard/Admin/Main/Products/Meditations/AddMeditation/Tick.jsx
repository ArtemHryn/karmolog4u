import { useFormContext } from 'react-hook-form';
import styles from './AddMeditationForm.module.scss';

const Tick = ({ name, label = 'Очікується' }) => {
  const { register } = useFormContext();
  return (
    <div className={styles.checkbox_wrapper}>
      <input type="checkbox" id={`check-51`} {...register(name)} />
      <label htmlFor={`check-51`}>
        <svg viewBox="0,0,50,50">
          <path d="M5 30 L 20 45 L 45 5"></path>
        </svg>
      </label>
      <p className={styles.text}>{label}</p>
    </div>
  );
};

export default Tick;

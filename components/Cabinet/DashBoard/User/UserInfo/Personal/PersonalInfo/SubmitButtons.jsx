import { open_Sans } from '@/app/[locale]/layout';
import styles from './PersonalInfo.module.scss';

const SubmitButtons = ({ reset }) => {
  return (
    <div className={styles.buttons_wrapper}>
      <button className={`${styles.button} ${open_Sans.className} ${styles.button_accept}`}>
        Зберегти
      </button>
      <button
        type="button"
        onClick={() => reset()}
        className={`${styles.button} ${open_Sans.className}`}
      >
        Відмінити зміни
      </button>
    </div>
  );
};

export default SubmitButtons;

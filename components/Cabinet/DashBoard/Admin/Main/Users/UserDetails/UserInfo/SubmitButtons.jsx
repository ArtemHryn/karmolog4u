import { useFormContext } from 'react-hook-form';
import styles from './UserInfo.module.scss';
import { open_Sans } from '@/app/[locale]/layout';
const SubmitButtons = () => {
  const { reset } = useFormContext();
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

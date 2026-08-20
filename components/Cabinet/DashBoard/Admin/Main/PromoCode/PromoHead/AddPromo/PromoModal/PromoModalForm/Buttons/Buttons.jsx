import { open_Sans } from '@/app/[locale]/layout';
import styles from './Buttons.module.scss';

const Buttons = ({ setShowModal }) => {
  return (
    <div className={styles.buttons_wrapper}>
      <button
        onClick={() => setShowModal(false)}
        type="button"
        className={`${open_Sans.className} ${styles.button} ${styles.button_cancel}`}
      >
        Відмінити
      </button>
      <button type="submit" className={`${open_Sans.className} ${styles.button}`}>
        Додати
      </button>
    </div>
  );
};

export default Buttons;

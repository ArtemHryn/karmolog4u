import { useFormContext } from 'react-hook-form';
import styles from './Contract.module.scss';

const Buttons = ({ setOpenModal, onReject }) => {
  const { reset } = useFormContext();

  return (
    <div className={`${styles.buttons_wrapper}`}>
      <button
        type="button"
        className={`${styles.proceed_buttons} ${styles.proceed_buttons_save}`}
        onClick={() => setOpenModal(false)}
      >
        Зберегти зміни
      </button>
      <button
        type="button"
        className={`${styles.proceed_buttons} ${styles.proceed_buttons_cancel}`}
        onClick={onReject}
      >
        Відхилити зміни{' '}
      </button>
    </div>
  );
};

export default Buttons;

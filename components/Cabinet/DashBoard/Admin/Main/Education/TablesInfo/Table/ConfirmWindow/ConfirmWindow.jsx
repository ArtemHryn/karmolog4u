import { inter, open_Sans } from '@/app/[locale]/layout';
import ModalContainer from '../../../AddCourse/AddCourseForm/Form/FormParts/AdditionalLinks/ModalContainer';
import styles from './ConfirmWindow.module.scss';

const ConfirmWindow = ({ setShowDialogWindow, onDelete, message }) => {
  return (
    <ModalContainer setShowModal={setShowDialogWindow}>
      <div className={styles.wrapper}>
        <p className={`${styles.title} ${inter.className}`}>{message}</p>
        <div className={styles.buttons_wrapper}>
          <button className={`${styles.button} ${open_Sans.className}`} onClick={onDelete}>
            Так
          </button>
          <button
            className={`${styles.button} ${styles.button_cancel} ${open_Sans.className}`}
            onClick={() => setShowDialogWindow(false)}
          >
            Ні
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ConfirmWindow;

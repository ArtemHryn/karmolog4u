import { inter, open_Sans } from '@/app/[locale]/layout';
import ModalContainer from '../../../AddCourse/AddCourseForm/Form/FormParts/AdditionalLinks/ModalContainer';
import styles from './ConfirmWindow.module.scss';

const ConfirmWindow = ({ setShowDialogWindow, onDeleteCourse }) => {
  return (
    <ModalContainer setShowModal={setShowDialogWindow}>
      <div className={styles.wrapper}>
        <p className={`${styles.title} ${inter.className}`}>Дійсно хочете видалити курс?</p>
        <div className={styles.buttons_wrapper}>
          <button className={`${styles.button} ${open_Sans.className}`} onClick={onDeleteCourse}>
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

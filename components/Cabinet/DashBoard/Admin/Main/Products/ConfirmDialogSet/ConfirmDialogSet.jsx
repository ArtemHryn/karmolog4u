import ConfirmDialog from './ConfirmDialog/ConfirmDialog';
import { HIDDEN } from '@helper/consts';

import styles from './ConfirmDialogSet.module.scss';

const ConfirmDialogSet = ({
  status,
  name,
  acceptOnHide,
  rejectOnHide,
  acceptOnDelete,
  rejectOnDelete,
  visibleDialogToHide,
  visibleDialogToDelete,
}) => {
  return (
    <>
      <div className={`${styles.overlay} ${!visibleDialogToHide ? styles.hide_overlay : ''}`}>
        <ConfirmDialog
          header={`${status === HIDDEN ? 'Приховати продукт' : 'Опубілковати продукт'}`}
          message={`Ви впевнені, що хочете ${
            status === HIDDEN ? 'приховати' : 'опубілковати'
          }  ${name}? Після цього він стане недоступним для публічного перегляду, але ви зможете будь-коли повернути його із розділу “Приховані”.`}
          accept={acceptOnHide}
          reject={rejectOnHide}
          acceptContext={`${status === HIDDEN ? 'Опубілковати' : 'Приховати'}`}
        />
      </div>
      <div className={`${styles.overlay} ${!visibleDialogToDelete ? styles.hide_overlay : ''}`}>
        <ConfirmDialog
          header={'Видалити продукт'}
          message={`Ви впевнені, що хочете видалити ${name}? У разі чого, ви зможете повернути його з “Видалене” впродовж тижня.`}
          accept={acceptOnDelete}
          reject={rejectOnDelete}
          acceptContext={'Видалити'}
        />
      </div>
    </>
  );
};

export default ConfirmDialogSet;

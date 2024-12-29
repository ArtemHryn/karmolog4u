import ConfirmDialog from '@components/Cabinet/DashBoard/Admin/Main/Products/ConfirmDialogSet/ConfirmDialog/ConfirmDialog';
import styles from './ConfirmDialogSet.module.scss';

const ConfirmDialogSet = ({
  acceptOnRestore,
  rejectOnRestore,
  acceptOnDelete,
  rejectOnDelete,
  visibleDialogToRestore,
  visibleDialogToDelete,
}) => {
  return (
    <>
      <div className={`${styles.overlay} ${!visibleDialogToRestore ? styles.hide_overlay : ''}`}>
        <ConfirmDialog
          header={`Повернути з видаленого`}
          message={
            "Цей продукт знову з'явиться у списку авторських продуктів. Підтвердьте своє рішення."
          }
          accept={acceptOnRestore}
          reject={rejectOnRestore}
          acceptContext={`Повернути`}
        />
      </div>
      <div className={`${styles.overlay} ${!visibleDialogToDelete ? styles.hide_overlay : ''}`}>
        <ConfirmDialog
          header={'Видалити назавжди'}
          message={`Цей продукт буде остаточно видалений зі списку авторських продуктів. Ви впевнені, що хочете продовжити?`}
          accept={acceptOnDelete}
          reject={rejectOnDelete}
          acceptContext={'Видалити'}
        />
      </div>
    </>
  );
};

export default ConfirmDialogSet;

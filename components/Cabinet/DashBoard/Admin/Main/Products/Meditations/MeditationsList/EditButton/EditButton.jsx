import { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { OverlayPanel } from 'primereact/overlaypanel';
import EditButtonIcon from './EditButtonIcon';
import EditMenu from './EditMenu';

import styles from './EditButton.module.scss';
import 'primereact/resources/primereact.min.css';
import ConfirmDialog from './ConfirmDialog/ConfirmDialog';

const EditButton = ({ id, list, setList, name, status }) => {
  const [visibleDialogToHide, setVisibleDialogToHide] = useState(false);
  const [visibleDialogToDelete, setVisibleDialogToDelete] = useState(false);

  const op = useRef(null);

  const onHide = () => {
    const updatedList = list.map(el =>
      el.id === id ? { ...el, status: status === 'hidden' ? 'published' : 'hidden' } : el
    );
    setList(updatedList);
    setVisibleDialogToHide(false);
    document.body.style.overflow = 'auto';
  };

  const onDelete = () => {
    const result = list.filter(el => el.id !== id);
    setList(result);
    document.body.style.overflow = 'auto';
  };

  const onReject = callback => {
    callback(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className={`${styles.overlay} ${!visibleDialogToHide ? styles.hide_overlay : ''}`}>
        <ConfirmDialog
          header={`${status === 'hidden' ? 'Приховати продукт' : 'Опубілковати продукт'}`}
          message={`Ви впевнені, що хочете ${
            status === 'hidden' ? 'приховати' : 'опубілковати'
          }  ${name}? Після цього він стане недоступним для публічного перегляду, але ви зможете будь-коли повернути його із розділу “Приховані”.`}
          accept={onHide}
          reject={() => onReject(setVisibleDialogToHide)}
          acceptContext={`${status === 'hidden' ? 'Опубілковати' : 'Приховати'}`}
        />
      </div>
      <div className={`${styles.overlay} ${!visibleDialogToDelete ? styles.hide_overlay : ''}`}>
        <ConfirmDialog
          header={'Видалити продукт'}
          message={`Ви впевнені, що хочете видалити ${name}? У разі чого, ви зможете повернути його з “Видалене” впродовж тижня.`}
          accept={onDelete}
          reject={() => onReject(setVisibleDialogToDelete)}
          acceptContext={'Видалити'}
        />
      </div>
      <button
        onClick={e => {
          op.current.toggle(e);
        }}
      >
        <EditButtonIcon />
        <OverlayPanel ref={op}>
          <EditMenu
            setVisibleDialogToHide={setVisibleDialogToHide}
            setVisibleDialogToDelete={setVisibleDialogToDelete}
            status={status}
          />
        </OverlayPanel>
      </button>
    </>
  );
};

export default EditButton;

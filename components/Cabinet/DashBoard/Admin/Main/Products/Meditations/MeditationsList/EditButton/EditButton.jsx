import { useRef, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { OverlayPanel } from 'primereact/overlaypanel';
import EditButtonIcon from './EditButtonIcon';
import EditMenu from './EditMenu';
import ConfirmDialog from './ConfirmDialog/ConfirmDialog';
import { HIDDEN, PUBLISHED } from '@helper/consts';

import styles from './EditButton.module.scss';
import 'primereact/resources/primereact.min.css';

const deleteMeditation = async (id, token) => {
  const res = await fetch(`http://localhost:4499/admin/products/meditations/delete/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorMessage = await res.json();
    throw new Error(errorMessage.message || 'Не вдалося видалити медитацію');
  }

  return res.json();
};

const hideMeditation = async (id, token, status) => {
  const res = await fetch(`http://localhost:4499/admin/products/meditations/status/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status }),
  });

  if (!res.ok) {
    const errorMessage = await res.json();
    throw new Error(errorMessage.message || 'Упс щось трапилось');
  }

  return res.json();
};

const EditButton = ({ id, name, status }) => {
  const [visibleDialogToHide, setVisibleDialogToHide] = useState(false);
  const [visibleDialogToDelete, setVisibleDialogToDelete] = useState(false);
  const { data: token } = useSession();
  const queryClient = useQueryClient();

  const op = useRef(null);

  const mutation = useMutation({
    mutationFn: async ({ action }) => {
      if (action === 'delete') await deleteMeditation(id, token.accessToken);
      if (action === 'hide')
        await hideMeditation(id, token.accessToken, status === HIDDEN ? PUBLISHED : HIDDEN);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['meditations'] });
      queryClient.invalidateQueries({ queryKey: ['products-count'] });
    },
  });

  const onHide = () => {
    mutation.mutate({ action: 'hide' });
    setVisibleDialogToHide(false);
    document.body.style.overflow = 'auto';
  };

  const onDelete = () => {
    mutation.mutate({ action: 'delete' });
    setVisibleDialogToDelete(false);
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
          header={`${status === HIDDEN ? 'Приховати продукт' : 'Опубілковати продукт'}`}
          message={`Ви впевнені, що хочете ${
            status === HIDDEN ? 'приховати' : 'опубілковати'
          }  ${name}? Після цього він стане недоступним для публічного перегляду, але ви зможете будь-коли повернути його із розділу “Приховані”.`}
          accept={onHide}
          reject={() => onReject(setVisibleDialogToHide)}
          acceptContext={`${status === HIDDEN ? 'Опубілковати' : 'Приховати'}`}
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
            id={id}
          />
        </OverlayPanel>
      </button>
    </>
  );
};

export default EditButton;

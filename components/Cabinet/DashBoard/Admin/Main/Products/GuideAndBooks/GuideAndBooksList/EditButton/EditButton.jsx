import { useMutation } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import EditButtonIcon from '../../../Meditations/MeditationsList/EditButton/EditButtonIcon';
import ConfirmDialogSet from '../../../ConfirmDialogSet/ConfirmDialogSet';
import EditMenu from '../../../Meditations/MeditationsList/EditButton/EditMenu';
import { HIDDEN, PUBLISHED } from '@helper/consts';

const deleteGuideAndBooks = async (id, token) => {
  const res = await fetch(`http://localhost:4499/admin/products/guide-and-books/delete/${id}`, {
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

const hideGuideAndBooks = async (id, token, status) => {
  const res = await fetch(`http://localhost:4499/admin/products/guide-and-books/status/${id}`, {
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

  const op = useRef(null);

  const mutation = useMutation({
    mutationFn: async ({ action }) => {
      if (action === 'delete') await deleteGuideAndBooks(id, token.accessToken);
      if (action === 'hide')
        await hideGuideAndBooks(id, token.accessToken, status === HIDDEN ? PUBLISHED : HIDDEN);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['meditations'] });
      queryClient.invalidateQueries({ queryKey: ['products-count'] });
    },
  });

  const onHide = () => {
    // mutation.mutate({ action: 'hide' });
    setVisibleDialogToHide(false);
    document.body.style.overflow = 'auto';
  };

  const onDelete = () => {
    // mutation.mutate({ action: 'delete' });
    setVisibleDialogToDelete(false);
    document.body.style.overflow = 'auto';
  };

  const onReject = callback => {
    callback(false);
    document.body.style.overflow = 'auto';
  };
  return (
    <>
      {' '}
      <ConfirmDialogSet
        status={status}
        name={name}
        acceptOnHide={onHide}
        rejectOnHide={() => onReject(setVisibleDialogToHide)}
        acceptOnDelete={onDelete}
        rejectOnDelete={() => onReject(setVisibleDialogToDelete)}
        visibleDialogToHide={visibleDialogToHide}
        visibleDialogToDelete={visibleDialogToDelete}
      />
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
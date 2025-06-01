import { useRef, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { OverlayPanel } from 'primereact/overlaypanel';

import EditButtonIcon from '../../../Meditations/MeditationsList/EditButton/EditButtonIcon';
import EditMenu from '../../../Meditations/MeditationsList/EditButton/EditMenu';
import ConfirmDialogSet from '../../../ConfirmDialogSet/ConfirmDialogSet';

import { base_url, HIDDEN } from '@helper/consts';

const deleteWebinars = async (id, token) => {
  const res = await fetch(`${base_url}/admin/products/webinars/delete/${id}`, {
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

const hideWebinars = async (id, token, status) => {
  const res = await fetch(`${base_url}/admin/products/webinars/status/${id}`, {
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
  const queryClient = useQueryClient();
  const { data: token } = useSession();


  const op = useRef(null);

  const mutation = useMutation({
    mutationFn: async ({ action }) => {
      if (action === 'delete') await deleteWebinars(id, token.accessToken);
      if (action === 'hide')
        await hideWebinars(id, token.accessToken, status === HIDDEN ? PUBLISHED : HIDDEN);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['webinars'] });
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

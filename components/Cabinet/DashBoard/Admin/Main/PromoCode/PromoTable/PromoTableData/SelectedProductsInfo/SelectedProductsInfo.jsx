import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import ConfirmDialog from '../../../../Products/ConfirmDialogSet/ConfirmDialog/ConfirmDialog';

import { base_url } from '@helper/consts';
import styles from './SelectedProductsInfo.module.scss';

const deleteBulkPromo = async (data, token) => {

  const res = await fetch(`${base_url}/admin/promo-code/delete/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorMessage = await res.json();
    throw new Error(errorMessage.message || 'Щось пішло не так');
  }

  return res.json();
};

const SelectedProductsInfo = ({ selectedProducts }) => {
  const [visibleDialogToDelete, setVisibleDialogToDelete] = useState(false);
  const queryClient = useQueryClient();
  const { data: token } = useSession();

  const mutation = useMutation({
    mutationFn: ({ data }) => deleteBulkPromo(data, token.accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries(['promocodes']);
    },
  });

  const onDelete = () => {
    const listToDelete = selectedProducts.map(({ _id }) => _id);
    mutation.mutate({ data: listToDelete });

    setVisibleDialogToDelete(false);
    document.body.style.overflow = 'auto';
  };

  const onReject = callback => {
    callback(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={`${styles.overlay} ${!visibleDialogToDelete ? styles.hide_overlay : ''}`}>
          <ConfirmDialog
            header={`Видалити ${selectedProducts.length} промокоди`}
            message={
              'Ці промокоди будуть видалені і стануть недійсними. Ви впевнені, що хочете продовжити?'
            }
            accept={onDelete}
            reject={() => onReject(setVisibleDialogToDelete)}
            acceptContext={`Видалити`}
          />
        </div>
        <p>{selectedProducts.length} пункти обрано:</p>
        <button className={styles.button} onClick={() => setVisibleDialogToDelete(true)}>
          Видалити
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 14C8 14.55 7.55 15 7 15C6.45 15 6 14.55 6 14V10C6 9.45 6.45 9 7 9C7.55 9 8 9.45 8 10V14ZM14 14C14 14.55 13.55 15 13 15C12.45 15 12 14.55 12 14V10C12 9.45 12.45 9 13 9C13.55 9 14 9.45 14 10V14ZM16 17C16 17.551 15.552 18 15 18H5C4.448 18 4 17.551 4 17V6H16V17ZM8 2.328C8 2.173 8.214 2 8.5 2H11.5C11.786 2 12 2.173 12 2.328V4H8V2.328ZM19 4H18H14V2.328C14 1.044 12.879 0 11.5 0H8.5C7.121 0 6 1.044 6 2.328V4H2H1C0.45 4 0 4.45 0 5C0 5.55 0.45 6 1 6H2V17C2 18.654 3.346 20 5 20H15C16.654 20 18 18.654 18 17V6H19C19.55 6 20 5.55 20 5C20 4.45 19.55 4 19 4Z"
              fill="#CC3636"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default SelectedProductsInfo;

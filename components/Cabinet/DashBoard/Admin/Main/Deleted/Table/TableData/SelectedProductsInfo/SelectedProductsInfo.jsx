import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import ConfirmDialogSet from './ConfirmDialogSet/ConfirmDialogSet';
import { base_url } from '@helper/consts';

import styles from './SelectedProductsInfo.module.scss';
import { useSession } from 'next-auth/react';

const actionDeletedProducts = async (data, token, action) => {
  const res = await fetch(`${base_url}/admin/products/deleted/${action}`, {
    method: 'PATCH',
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

const SelectedProductsInfo = ({
  selectedProducts,
  search,
  currentPage,
  toast,
  setCurrentPage,
  setSelectedProducts,
}) => {
  const [visibleDialogToRestore, setVisibleDialogToRestore] = useState(false);
  const [visibleDialogToDelete, setVisibleDialogToDelete] = useState(false);
  const { data: token } = useSession();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ action, data }) =>
      await actionDeletedProducts(data, token.accessToken, action),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['deleted_products', search, currentPage] });
      setCurrentPage(1);
      setSelectedProducts(null);
    },
    onError: er => {
      toast.error(er);
    },
  });

  const onRestore = () => {
    const filteredData = selectedProducts.map(({ id, collection }) => ({ id, collection }));
    mutation.mutate({ action: 'restore', data: filteredData });
    setVisibleDialogToRestore(false);
    document.body.style.overflow = 'auto';
  };

  const onDelete = () => {
    const filteredData = selectedProducts.map(({ id, collection }) => ({ id, collection }));
    mutation.mutate({ action: 'delete-forever', data: filteredData });
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
        acceptOnRestore={onRestore}
        rejectOnRestore={() => onReject(setVisibleDialogToRestore)}
        acceptOnDelete={onDelete}
        rejectOnDelete={() => onReject(setVisibleDialogToDelete)}
        visibleDialogToRestore={visibleDialogToRestore}
        visibleDialogToDelete={visibleDialogToDelete}
      />
      <div className={styles.wrapper}>
        <p>{selectedProducts.length} пункти обрано:</p>
        <div className={styles.buttons_wrapper}>
          <button className={styles.button} onClick={() => setVisibleDialogToRestore(true)}>
            Повернути
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.454 7.50047C12.017 7.50047 15.231 9.13447 17.264 11.7595C16.329 7.89047 12.734 5.00047 8.454 5.00047C7.901 5.00047 7.454 4.55347 7.454 4.00047V2.07747L2.63 6.25147L7.454 10.4635V8.50047C7.454 7.94747 7.901 7.50047 8.454 7.50047ZM18.221 17.0005C17.76 17.0005 17.358 16.6855 17.249 16.2375C16.359 12.5885 13.228 9.95247 9.454 9.55347V10.6745C9.454 11.3805 9.035 12.0095 8.361 12.3145C7.63 12.6475 6.777 12.5275 6.184 12.0105L1.118 7.58647C0.725 7.24247 0.5 6.75547 0.5 6.25047C0.5 5.74547 0.725 5.25847 1.118 4.91447L6.184 0.490471C6.777 -0.0265291 7.63 -0.146529 8.361 0.186471C9.035 0.491471 9.454 1.12047 9.454 1.82647V3.04447C15.078 3.53747 19.5 8.15047 19.5 13.7505C19.5 14.5605 19.396 15.3965 19.192 16.2365C19.084 16.6855 18.683 17.0005 18.221 17.0005Z"
                fill="#2961E0"
              />
            </svg>
          </button>
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
      </div>
    </>
  );
};

export default SelectedProductsInfo;

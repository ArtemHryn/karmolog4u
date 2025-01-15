'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './PromoModal.module.scss';
import PromoModalForm from './PromoModalForm/PromoModalForm';
import { useQueryClient } from '@tanstack/react-query';

const PromoModal = () => {
  const overlay = useRef(null);
  const router = useRouter();
  const search = useSearchParams();
  const id = search.get('id');
  const searchParam = search.get('search');
  const currentPage = search.get('page');
  const queryClient = useQueryClient();

  const onDismiss = useCallback(() => {
    router.back({ scroll: false });
  }, [router]);

  const onEscClick = useCallback(
    e => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss]
  );

  const onOverlayClick = useCallback(
    e => {
      if (e.target === overlay.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay]
  );

  useEffect(() => {
    document.addEventListener('keydown', onEscClick);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onEscClick);
      document.body.style.overflow = 'visible';
    };
  });

  const editPromo = () => {
    const list = queryClient.getQueryData(['promocodes', searchParam, +currentPage]);

    if (!id || !list) return null;
    const promo = list?.data.find(item => item._id === id);
    return promo;
  };
  return (
    <div className={styles.layer} ref={overlay} onClick={onOverlayClick}>
      <PromoModalForm edit={editPromo()} />
    </div>
  );
};

export default PromoModal;

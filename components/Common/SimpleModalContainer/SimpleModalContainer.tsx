import React, { useEffect, useRef } from 'react';

import styles from './SimpleModalContainer.module.scss';

interface SimpleModalContainerProps {
  children: React.ReactNode;
  setShowModal: (show: boolean) => void;
}

const SimpleModalContainer = ({ children, setShowModal }: SimpleModalContainerProps) => {
  const overlay = useRef<HTMLDivElement>(null);

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlay.current) {
      if (setShowModal) setShowModal(false);
    }
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [setShowModal]);

  return (
    <div className={styles.overlay} onClick={onClick} ref={overlay} role="dialog" aria-modal="true">
      {children}
    </div>
  );
};

export default SimpleModalContainer;

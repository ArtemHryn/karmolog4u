import { useEffect, useRef } from 'react';
import styles from './AdditionalLinks.module.scss';

const ModalContainer = ({ children, setShowModal, resetForm }) => {
  const overlay = useRef(null);

  const onClick = e => {
    if (e.target === overlay.current) {
      if (resetForm) resetForm();
      if (setShowModal) setShowModal(false);
    }
  };
  useEffect(() => {
    const onKeyDown = e => {
      if (e.key === 'Escape') {
        if (resetForm) resetForm();
        setShowModal(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [resetForm, setShowModal]);

  return (
    <div ref={overlay} className={styles.overlay} onClick={onClick}>
      {children}
    </div>
  );
};

export default ModalContainer;

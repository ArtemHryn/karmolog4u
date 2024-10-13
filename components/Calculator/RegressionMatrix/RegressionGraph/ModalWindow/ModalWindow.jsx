import { useEffect } from 'react';

import styles from './ModalWindow.module.scss';
import Content from './Content/Content';

const ModalWindow = ({ matrix, setShowModal, currentKey, translation }) => {
  useEffect(() => {
    const onCloseByEscape = e => {
      if (e.code === 'Escape') {
        setShowModal(false);
      }
    };
    window.addEventListener('keydown', onCloseByEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onCloseByEscape);
      document.body.style.overflow = 'visible';
    };
  }, [setShowModal]);

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setShowModal(false);
    }
  };

  return (
    <div className={styles.layout} onClick={onBackdropClick}>
      <div className={styles.modal}>
        <button onClick={() => setShowModal(false)}>
          <svg
            className={styles.close}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5924 5.58849L14.4141 4.41016L10.0032 8.82099L5.5924 4.41016L4.41406 5.58849L8.8249 9.99932L4.41406 14.4102L5.5924 15.5885L10.0032 11.1777L14.4141 15.5885L15.5924 14.4102L11.1816 9.99932L15.5924 5.58849Z"
              fill="#FDFDFD"
            />
          </svg>
        </button>
        <Content title={translation} matrix={matrix} currentKey={currentKey} />
      </div>
    </div>
  );
};

export default ModalWindow;

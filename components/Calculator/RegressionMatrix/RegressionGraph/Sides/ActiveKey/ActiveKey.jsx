import { useRef, useState } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';

import styles from '../Sides.module.scss';
import { unbounded } from '@app/[locale]/layout';

import 'primereact/resources/primereact.min.css';
import ModalWindow from '../../ModalWindow/ModalWindow';

const ActiveKey = ({ currentKey, styled, translation, main, matrix }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const op = useRef(null);

  const handleClick = e => {
    op.current.toggle(e);
    setIsVisible(prev => !prev);
  };

  const onOpenModalWindow = () => {
    setShowModal(true);
    op.current.hide();
  };

  return (
    <>
      <button
        className={`${main ? styles.out_key : styles.inner_key} ${styled} ${unbounded.className} ${
          main ? styles.active : ''
        }`}
        onClick={handleClick}
        type="button"
      >
        {matrix[currentKey]}
      </button>
      <OverlayPanel ref={op} className={isVisible ? styles.fade_in : ''}>
        <button
          type="button"
          className={`${styles.link_to_regression} ${unbounded.className}`}
          onClick={onOpenModalWindow}
        >
          {translation}
        </button>
      </OverlayPanel>
      {showModal && (
        <ModalWindow
          matrix={matrix}
          setShowModal={setShowModal}
          currentKey={currentKey}
          translation={translation}
        />
      )}
    </>
  );
};

export default ActiveKey;

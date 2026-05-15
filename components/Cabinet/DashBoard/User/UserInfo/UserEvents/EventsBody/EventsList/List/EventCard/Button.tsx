import { useState } from 'react';
import styles from './EventCard.module.scss';
import SimpleModalContainer from '@/components/Common/SimpleModalContainer/SimpleModalContainer';
import ModalContext from '@/components/Common/Modal/ModalContext';

const Button = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setShowModal(true)} className={`${styles.button}`}>
        Подати заявку для участі
      </button>
      {showModal && (
        <SimpleModalContainer setShowModal={setShowModal} showCenter>
          <ModalContext />
        </SimpleModalContainer>
      )}
    </>
  );
};

export default Button;

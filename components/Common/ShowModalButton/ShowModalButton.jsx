'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import ModalContext from '../Modal/ModalContext';
import SimpleModalContainer from '../SimpleModalContainer/SimpleModalContainer';

const ShowModalButton = ({ styles, name, wrapperStyles }) => {
  const [showModal, setShowModal] = useState(false);
  const t = useTranslations('Services.therapy_sessions');
  return (
    <div className={`${wrapperStyles || ''}`}>
      {' '}
      <button
        className={styles}
        onClick={() => {
          setShowModal(true);
        }}
      >
        {name ? name : t('hero_button')}
      </button>
      {showModal && (
        <SimpleModalContainer setShowModal={setShowModal}>
          <ModalContext />
        </SimpleModalContainer>
      )}
    </div>
  );
};

export default ShowModalButton;

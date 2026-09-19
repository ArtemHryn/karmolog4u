'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import SimpleModalContainer from '@/components/Common/SimpleModalContainer/SimpleModalContainer';
import { open_Sans_Client } from '@/app/[locale]/clients-fonts';
import styles from './DetailsModal.module.scss';
import CharityModal from './CharityModal/CharityModal';

const DetailsModal = () => {
  const [showModal, setShowModal] = useState(false);
  const t = useTranslations('Human_psychology.Foundation.recommendation');

  return (
    <>
      <button
        className={`${styles.button_thanks} ${open_Sans_Client.className}`}
        onClick={() => setShowModal(true)}
      >
        {t('link')}
      </button>
      {showModal && (
        <SimpleModalContainer setShowModal={setShowModal} showCenter>
          <CharityModal />
        </SimpleModalContainer>
      )}
    </>
  );
};

export default DetailsModal;

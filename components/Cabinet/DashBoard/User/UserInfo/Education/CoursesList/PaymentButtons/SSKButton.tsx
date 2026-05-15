import { useState } from 'react';
import { open_Sans_Client } from '@/app/[locale]/clients-fonts';

import styles from './PaymentButtons.module.scss';
import SimpleModalContainer from '@/components/Common/SimpleModalContainer/SimpleModalContainer';
import ModalPayment from './ModalPayment/ModalPayment';

type PaymentTypes = {
  allowed: { telegram: boolean; wayForPay: boolean; requisites: boolean };
  requisitesText?: string;
};

interface SSKButtonProps {
  paymentTypes: PaymentTypes;
  id: string;
  name: string;
}

const SSKButton = ({ paymentTypes, id, name }: SSKButtonProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.payment}>
      <p className={styles.payment_text}>Сплачено 50% рахунку</p>
      <button
        type="button"
        className={`${styles.button} ${open_Sans_Client.className}`}
        onClick={() => setShowModal(true)}
      >
        Сплатити залишок
      </button>
      {showModal && (
        <SimpleModalContainer setShowModal={setShowModal} showCenter={true}>
          <ModalPayment
            allowed={paymentTypes.allowed}
            requisitesText={paymentTypes.requisitesText || ''}
            id={id}
            name={name}
          />
        </SimpleModalContainer>
      )}
    </div>
  );
};

export default SSKButton;

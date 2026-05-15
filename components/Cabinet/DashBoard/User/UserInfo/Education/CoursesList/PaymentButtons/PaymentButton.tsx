import { open_Sans_Client } from '@/app/[locale]/clients-fonts';
import styles from './PaymentButtons.module.scss';
import { useState } from 'react';
import SimpleModalContainer from '@/components/Common/SimpleModalContainer/SimpleModalContainer';
import ModalPayment from './ModalPayment/ModalPayment';

type PaymentTypes = {
  allowed: { telegram: boolean; wayForPay: boolean; requisites: boolean };
  requisitesText?: string;
};

interface PaymentButtonProps {
  availableTo: Date;
  paymentTypes: PaymentTypes;
  id: string;
  name: string;
}

const PaymentButton = ({ availableTo, paymentTypes, id, name }: PaymentButtonProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.payment}>
      <p className={styles.payment_text}>{`Сплачено до ${new Date(availableTo).toLocaleString(
        undefined,
        {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }
      )}`}</p>
      <button
        type="button"
        className={`${styles.button} ${open_Sans_Client.className}`}
        onClick={() => setShowModal(true)}
      >
        Сплатити за місяць
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

export default PaymentButton;

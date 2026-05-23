import { open_Sans_Client } from '@/app/[locale]/clients-fonts';

import styles from './CourseNavigation.module.scss';
import { useState } from 'react';
import SimpleModalContainer from '@/components/Common/SimpleModalContainer/SimpleModalContainer';
import ModalPayment from '@/components/Cabinet/DashBoard/User/UserInfo/Education/CoursesList/PaymentButtons/ModalPayment/ModalPayment';

type PaymentMethod = 'telegram' | 'wayForPay' | 'requisites';

type AllowedPayments = Record<PaymentMethod, boolean>;

type Course = {
  paymentTypes: { allowed: AllowedPayments; requisitesText?: string };
  id: string;
  name: string;
};

interface PaymentButtonProps {
  type: 'course' | 'practice';
  disabled: boolean;
  icon: React.ElementType;
  buttonName: string;
  course: Course;
}

const PaymentButton = ({ type, disabled, icon: Icon, buttonName, course }: PaymentButtonProps) => {
  const [showModal, setShowModal] = useState(false);
  const { paymentTypes, id, name } = course;
  return (
    <>
      {' '}
      <button
        onClick={() => setShowModal(true)}
        className={`${styles.redirect_el} ${open_Sans_Client.className}`}
        disabled={disabled}
      >
        <div className={styles.icon_wrapper}>
          <Icon />
        </div>
        {buttonName}
      </button>
      {showModal && (
        <SimpleModalContainer setShowModal={setShowModal} showCenter>
          <ModalPayment
            allowed={paymentTypes.allowed}
            requisitesText={paymentTypes.requisitesText || ''}
            id={id}
            name={name}
            type={type}
          />
        </SimpleModalContainer>
      )}
    </>
  );
};

export default PaymentButton;

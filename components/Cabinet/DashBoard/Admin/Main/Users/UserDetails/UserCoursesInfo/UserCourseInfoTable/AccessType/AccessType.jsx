import { FULL, INSTALLMENTS, PARTIAL } from '@/helper/consts';

import styles from './AccessType.module.scss';

const AccessType = ({ rowData }) => {
  const access = { [FULL]: 'Повний', [PARTIAL]: '50%', [INSTALLMENTS]: 'Розсрочка' };
  return (
    <p className={`${styles.access_type} ${rowData.paymentPlan === 'FULL' && styles.full}`}>
      {access[rowData.paymentPlan] || 'Невідомий'}
    </p>
  );
};

export default AccessType;

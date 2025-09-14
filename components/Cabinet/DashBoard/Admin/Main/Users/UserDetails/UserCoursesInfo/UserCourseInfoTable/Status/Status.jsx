import { ACTIVE, BLOCKED, EXPIRED } from '@/helper/consts';
import styles from './Status.module.scss';

const Status = ({ rowData }) => {
  const status = {
    [BLOCKED]: 'Обмежений',
    [ACTIVE]: 'Активний',
    [EXPIRED]: 'Завершений',
  };
  const styleMap = {
    ACTIVE: styles.completed,
    EXPIRED: styles.expired,
  };
  return (
    <p className={`${styles.status} ${styleMap[rowData.status] || ''}`}>
      {status[rowData.status] || 'Невідомий'}
    </p>
  );
};

export default Status;

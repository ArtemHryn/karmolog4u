import { PaymentsRow } from '@/types/admin_user_details';
import styles from './StatusColumn.module.scss';

const StatusColumn = ({ rowData }: { rowData: PaymentsRow }) => {
  const status: Record<string, string> = {
    APPROVED: 'УСПІШНО',
    DECLINED: 'ВІДХИЛЕНО',
    PENDING: 'В ПРОЦЕСІ',
  };
  return (
    <div>
      <p className={`${styles.status} ${styles[rowData.status.toLowerCase()]}`}>
        {status[rowData.status] ?? 'НЕВІДОМИЙ'}
      </p>
    </div>
  );
};

export default StatusColumn;

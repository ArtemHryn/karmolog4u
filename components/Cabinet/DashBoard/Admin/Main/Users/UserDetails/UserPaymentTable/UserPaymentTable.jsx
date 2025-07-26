import { DataTable } from 'primereact/datatable';
import styles from './UserPaymentTable.module.scss';
import './table.scss';
import EmptyTable from '../../../Education/TablesInfo/Table/EmptyTable/EmptyTable';
import { Column } from 'primereact/column';

const UserPaymentTable = ({ userDetails }) => {

  const filterPayments = () => {
    if (!userDetails?.payment || userDetails.payment.length === 0) return [];
    return userDetails.payment.map(el => ({
      ...el,
      status: 'Успішно',
      date: new Date(2025, 6, 15).toLocaleString(undefined, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
      price: '200 EURO',
    }));
  };

  return (
    <div className={styles.info_part_wrapper}>
      <p>Платежі</p>
      <DataTable
        emptyMessage={<EmptyTable message="Зараз немає платежів" styledWrapper={styles.empty_wrapper}/>}
        value={filterPayments()}
        tableClassName={`${styles.table}`}
        dataKey={'id'}
      >
        <Column field="date" header="Дата" className={styles.column} />
        <Column field="price" header="Сума" className={styles.column} />
        <Column field="name" header="Назва продукту" className={styles.column} />
        <Column field="status" header="Статус" className={styles.column} />
      </DataTable>
    </div>
  );
};

export default UserPaymentTable;

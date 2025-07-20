import { DataTable } from 'primereact/datatable';
import EmptyTable from '../../../../Education/TablesInfo/Table/EmptyTable/EmptyTable';
import { Column } from 'primereact/column';

import styles from './UserCourseInfoTable.module.scss';
import '../table.scss';

const UserCourseInfoTable = ({ list }) => {
  return (
    <>
      <p>Доступні курси</p>
      <DataTable
        emptyMessage={<EmptyTable message="Зараз немає даних." />}
        value={list}
        tableClassName={`${styles.table}`}
        dataKey={'id'}
      >
        <Column field="name" header="Назва курсу" className={styles.column} />
        <Column field="status" header="Статус" className={styles.column} />
        <Column field="to" header="До" className={styles.column} />
        <Column header="" body={<div>R</div>} />
      </DataTable>
    </>
  );
};

export default UserCourseInfoTable;

import { DataTable } from 'primereact/datatable';
import EmptyTable from '../../../../Education/TablesInfo/Table/EmptyTable/EmptyTable';
import { Column } from 'primereact/column';

import styles from './UserCourseInfoTable.module.scss';
import '../table.scss';
import ActionsColumn from './ActionsColumn/ActionsColumn';

const UserCourseInfoTable = ({ list }) => {
  return (
    <>
      <p>Доступні курси</p>
      <DataTable
        emptyMessage={
          <EmptyTable message="Зараз немає курсів." styledWrapper={styles.empty_wrapper} />
        }
        value={list}
        tableClassName={`${styles.table}`}
        dataKey={'id'}
      >
        <Column field="name" header="Назва курсу" className={styles.column} />
        <Column field="status" header="Статус" className={styles.column} />
        <Column field="to" header="До" className={styles.column} />
        <Column header="" body={rowData => <ActionsColumn rowData={rowData} />} />
      </DataTable>
    </>
  );
};

export default UserCourseInfoTable;

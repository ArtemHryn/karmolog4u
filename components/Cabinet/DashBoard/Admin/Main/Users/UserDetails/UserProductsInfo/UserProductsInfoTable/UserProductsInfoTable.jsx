import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import EmptyTable from '../../../../Education/TablesInfo/Table/EmptyTable/EmptyTable';

import styles from './UserProductsInfoTable.module.scss';
import './table.scss';

const UserProductsInfoTable = ({ list }) => {
  return (
    <>
      <p>Доступні продукти</p>
      <DataTable
        emptyMessage={
          <EmptyTable message="Зараз немає продуктів." styledWrapper={styles.empty_wrapper} />
        }
        value={list}
        tableClassName={`${styles.table}`}
        dataKey={'id'}
      >
        <Column field="name" header="Назва продукту" className={styles.column} />
        <Column field="type" header="Тип" className={styles.column} />
        <Column header="" body={<div>R</div>} />
      </DataTable>
    </>
  );
};

export default UserProductsInfoTable;

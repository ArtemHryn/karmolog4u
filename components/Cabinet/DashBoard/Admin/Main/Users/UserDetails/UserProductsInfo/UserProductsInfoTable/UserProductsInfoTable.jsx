import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import EmptyTable from '../../../../../Education/TablesInfo/Table/EmptyTable/EmptyTable';

import styles from './UserProductsInfoTable.module.scss';
import './table.scss';
import { toast } from 'react-toastify';
import ProductType from './ProductType/ProductType';
import ActionColumn from './ActionColumn/ActionColumn';

const UserProductsInfoTable = ({ list, isError }) => {
  const filteredList = () => {
    if (!list || list.length === 0) return [];
    if (isError) {
      toast.error('Помилка завантаження продуктів');
      return [];
    }
    return list.map(({ createdAt, ...data }) => ({
      ...data,
      createdAt: createdAt
        ? new Date(createdAt).toLocaleString(undefined, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })
        : 'Не вказано',
    }));
  };

  return (
    <>
      <p>Доступні продукти</p>
      <DataTable
        emptyMessage={
          <EmptyTable message="Зараз немає продуктів." styledWrapper={styles.empty_wrapper} />
        }
        value={filteredList()}
        tableClassName={`${styles.table}`}
        dataKey={'id'}
      >
        <Column field="name" header="Назва продукту" className={styles.column} />
        <Column
          body={rowData => <ProductType rowData={rowData} />}
          header="Тип"
          className={styles.column}
        />
        <Column field="createdAt" header="Додано" className={styles.column} />
        <Column header="" body={rowData => <ActionColumn rowData={rowData} />} />
      </DataTable>
    </>
  );
};

export default UserProductsInfoTable;

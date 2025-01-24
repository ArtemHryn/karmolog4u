'use client';

import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { users } from '@helper/db/users';
import { Column } from 'primereact/column';

import styles from './UsersTable.module.scss';
import './table.scss';
import ActionsColumn from './ActionsColumn/ActionsColumn';
import Footer from '../../Deleted/Table/TableData/Footer/Footer';
import OpenAccountProperties from './OpenAccountProperties/OpenAccountProperties';

const UsersTable = () => {
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [userList, setUserList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const proceedData = users.map(item => {
      const { name, lastName } = item;
      return { ...item, fullName: `${name} ${lastName}` };
    });
    setUserList(proceedData);
  }, []);

  return (
    <div>
      <DataTable
        value={userList}
        selection={selectedProducts}
        onSelectionChange={e => setSelectedProducts(e.value)}
        dataKey="id"
        tableClassName={`${styles.table}`}
        resizableColumns
        showGridlines
        selectionMode={'checkbox'}
        footer={
          <Footer
            totalPage={5}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            total={100}
          />
        }
      >
        <Column selectionMode="multiple" className={styles.column} />
        <Column body={rowData => <OpenAccountProperties rowData={rowData} />} header="Ім’я" />
        <Column field="email" header="Email" className={styles.column} />
        <Column field="mobPhone" header="Телефон" className={styles.column} />
        <Column field="product" header="Продукт" className={styles.column} />
        <Column field="createdAt" header="Реєстрація" className={styles.column} />
        <Column field="lastLogin" header="Останній вхід" className={styles.column} />
        <Column
          body={rowData => <ActionsColumn rowData={rowData} />}
          header=""
          //   className={styles.column}
        />
      </DataTable>
    </div>
  );
};

export default UsersTable;

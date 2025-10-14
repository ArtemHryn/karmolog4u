'use client';

import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import styles from './UsersTable.module.scss';
import ActionsColumn from './ActionsColumn/ActionsColumn';
import Footer from '../../../../Deleted/Table/TableData/Footer/Footer';
import OpenAccountProperties from './OpenAccountProperties/OpenAccountProperties';
import './table.scss';
import EmptyTable from '../../../../Education/TablesInfo/Table/EmptyTable/EmptyTable';

const UsersTable = ({ users, totalUsers, currentPage, setCurrentPage }) => {
  const [selectedProducts, setSelectedProducts] = useState(null);

  const filterUsers = () => {
    if (!users || users.length === 0) return [];
    const filtered = users.map(({ mobPhone, education, createdAt, lastLogin, ...otherData }) => ({
      mobPhone: mobPhone
        ? mobPhone.startsWith('+')
          ? mobPhone
          : `+${mobPhone}`
        : 'немає телефону',
      product: education?.[0]?.name || 'немає курсу',
      createdAt: new Date(createdAt).toLocaleDateString(),
      lastLogin: lastLogin ? new Date(lastLogin).toLocaleDateString() : 'Не входив',
      ...otherData,
    }));

    return filtered;
  };

  return (
    <div>
      <DataTable
        value={filterUsers()}
        selection={selectedProducts}
        onSelectionChange={e => setSelectedProducts(e.value)}
        dataKey="id"
        tableClassName={`${styles.table}`}
        resizableColumns
        showGridlines
        emptyMessage={<EmptyTable message="У вас немає користувачів" />}
        footer={
          <Footer
            totalPage={Math.ceil(totalUsers / 20)}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            total={totalUsers}
          />
        }
      >
        <Column body={rowData => <OpenAccountProperties rowData={rowData} />} header="Ім’я" />
        <Column field="email" header="Email" className={styles.column} />
        <Column field="mobPhone" header="Телефон" className={styles.column} />
        <Column field="product" header="Продукт" className={styles.column} />
        <Column field="createdAt" header="Реєстрація" className={styles.column} />
        <Column field="lastLogin" header="Останній вхід" className={styles.column} />
        <Column body={rowData => <ActionsColumn rowData={rowData} />} header="" />
      </DataTable>
    </div>
  );
};

export default UsersTable;

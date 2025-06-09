'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useQueryClient } from '@tanstack/react-query';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import EmptyTable from '../../../TablesInfo/Table/EmptyTable/EmptyTable';
import Footer from '../../../TablesInfo/Table/Footer/Footer';
import NameHeader from '../../../TablesInfo/Table/TableHeaders/NameHeader';
import HeaderTemplate from '../../../TablesInfo/Table/TableHeaders/HeaderTemplate';
import ActionsColumn from '../../../TablesInfo/Table/ActionsColumn/ActionsColumn';
import { accessTypeList } from '@/helper/platform/coursesList';
import { moduleTypes } from '@/helper/platform/modules';

import styles from './Table.module.scss';
import './table.scss';

const Table = ({ selectedProducts, setSelectedProducts }) => {
  const [nameFilter, setNameFilter] = useState('1');
  const [selectedId, setSelectedId] = useState(null);
  const [typeFilter, setTypeFilter] = useState([]);
  const [accessFilter, setAccessFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDialogWindow, setShowDialogWindow] = useState(false);
  const { data: token } = useSession();
  const queryClient = useQueryClient();

  const courses = [];

  return (
    <div>
      <DataTable
        value={courses}
        emptyMessage={<EmptyTable message="Зараз немає даних. Додайте курс або змініть фільтр" />}
        selection={selectedProducts}
        onSelectionChange={e => setSelectedProducts(e.value)}
        resizableColumns
        showGridlines
        dataKey="id"
        selectionMode="checkbox"
        tableClassName={`${styles.table}`}
        footer={
          <Footer
            totalPage={courses[0]?.totalPages || 1}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        }
      >
        <Column selectionMode="multiple" className={styles.column} />
        <Column
          header={<NameHeader nameFilter={nameFilter} setNameFilter={setNameFilter} />}
          className={styles.column}
          body={rowData => (
            <div className={styles.name_column}>
              <Link href={`/cabinet/dashboard/admin/education/${rowData.id}/modules`}>
                {rowData.name}
              </Link>
            </div>
          )}
        />
        <Column
          field="type"
          header={
            <HeaderTemplate
              name={'Тип курсу'}
              list={moduleTypes}
              filter={typeFilter}
              setFilter={setTypeFilter}
            />
          }
          className={styles.column}
        />

        <Column
          field="period"
          header={
            <HeaderTemplate
              name={'Комплектність'}
              list={accessTypeList}
              filter={accessFilter}
              setFilter={setAccessFilter}
            />
          }
          className={styles.column}
        />
        <Column
          header=""
          body={rowData => (
            <ActionsColumn
              rowData={rowData}
              setSelectedId={setSelectedId}
              setShowDialogWindow={setShowDialogWindow}
              mutation={mutation}
              showDialogWindow={showDialogWindow}
            />
          )}
        />
      </DataTable>
    </div>
  );
};

export default Table;

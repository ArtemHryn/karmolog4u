import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import './table.scss';
import styles from './Table.module.scss';
import EmptyTable from '../../../Education/TablesInfo/Table/EmptyTable/EmptyTable';
import Footer from '../../../Education/TablesInfo/Table/Footer/Footer';

interface TableProps {
  setNumberOfCourses: (num: number) => void;
}

type EventRow = {
  id: number;
  name: string;
  date: string;
  time: string;
};

const table = [
  { id: 1, name: 'Event 1', date: '2024-01-01', time: '10:00 AM' },
  { id: 2, name: 'Event 2', date: '2024-01-02', time: '02:00 PM' },
];

const Table = ({ setNumberOfCourses }: TableProps) => {
  const [selectedProducts, setSelectedProducts] = useState<EventRow[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <DataTable
        value={table}
        resizableColumns
        showGridlines
        dataKey="id"
        onSelectionChange={e => setSelectedProducts(e.value)}
        selection={selectedProducts}
        columnResizeMode="fit"
        selectionMode={'checkbox'}
        emptyMessage={
          <EmptyTable
            message="Зараз немає подій"
            styledWrapper={styles.empty_wrapper}
          />
        }
        footer={<Footer totalPage={2} setCurrentPage={setCurrentPage} currentPage={currentPage} />}
      >
        <Column
          selectionMode="multiple"
          resizeable={false}
          style={{ width: '44px' }}
          headerStyle={{ width: '44px' }}
          bodyStyle={{ width: '44px' }}
          bodyClassName={styles.checkbox_column}
        />
        <Column field="name" header="Назва події" className={styles.column} />
        <Column field="date" header="Дата" className={styles.column} />
        <Column field="time" header="Час" className={styles.column} />
      </DataTable>
    </div>
  );
};

export default Table;

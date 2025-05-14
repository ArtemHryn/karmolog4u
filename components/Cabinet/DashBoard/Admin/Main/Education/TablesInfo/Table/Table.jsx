import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import styles from './Table.module.scss';
import './table.scss';

const Table = () => {
  const [selectedProducts, setSelectedProducts] = useState(null);

  return (
    <div>
      <DataTable
        value={[
          {
            name: 'test',
            type: 'type test',
            stream: '2',
            access: 'test access',
            comp: 'test comp',
          },
        ]}
        emptyMessage="Зараз немає даних"
        selection={selectedProducts}
        onSelectionChange={e => setSelectedProducts(e.value)}
        resizableColumns
        showGridlines
        dataKey="id"
        tableClassName={`${styles.table}`}
      >
        <Column selectionMode="multiple" className={styles.column} />
        <Column field="name" header="Назва" className={styles.column} />
        <Column field="type" header="Тип" className={styles.column} />
        <Column field="stream" header="Потік" className={styles.column} />
        <Column field="access" header="Тип доступу" className={styles.column} />
        <Column field="comp" header="Комплектність" className={styles.column} />
      </DataTable>
    </div>
  );
};

export default Table;

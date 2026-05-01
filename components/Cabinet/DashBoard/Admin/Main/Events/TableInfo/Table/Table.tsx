import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { format } from 'date-fns';
import { EventRow } from '@/types/events';

import EmptyTable from '../../../Education/TablesInfo/Table/EmptyTable/EmptyTable';
import Footer from '../../../Education/TablesInfo/Table/Footer/Footer';

import styles from './Table.module.scss';
import './table.scss';
import NameColumn from './NameColumn/NameColumn';
import ActionsColumn from './ActionsColumn/ActionsColumn';

interface TableProps {
  setDeleteEvents: React.Dispatch<React.SetStateAction<EventRow[]>>;
  deleteEvents: EventRow[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  emptyMessage?: string;
  events: EventRow[];
  totalPages: number;
}

const Table = ({
  setDeleteEvents,
  deleteEvents,
  currentPage,
  setCurrentPage,
  emptyMessage,
  events,
  totalPages,
}: TableProps) => {
  const filteredEvents = events.map((event: EventRow) => {
    const formattedStartDate = format(new Date(event.dateStart), 'yyyy-MM-dd HH:mm');
    const formattedEndDate = format(new Date(event.dateEnd), 'yyyy-MM-dd HH:mm');
    return { ...event, dateStart: formattedStartDate, dateEnd: formattedEndDate };
  });

  return (
    <div>
      <DataTable
        value={filteredEvents}
        resizableColumns
        showGridlines
        dataKey="id"
        onSelectionChange={e => setDeleteEvents(e.value)}
        selection={deleteEvents}
        columnResizeMode="fit"
        selectionMode={'checkbox'}
        emptyMessage={<EmptyTable message={emptyMessage} styledWrapper={styles.empty_wrapper} />}
        footer={
          <Footer
            totalPage={totalPages || 1}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        }
      >
        <Column
          selectionMode="multiple"
          resizeable={false}
          style={{ width: '44px' }}
          headerStyle={{ width: '44px' }}
          bodyStyle={{ width: '44px' }}
          bodyClassName={styles.checkbox_column}
        />
        <Column
          body={rowData => <NameColumn rowData={rowData} />}
          header="Назва події"
          className={styles.column}
        />
        <Column field="dateStart" header="Початок" className={styles.column} />
        <Column field="dateEnd" header="Кінець" className={styles.column} />
        <Column header="" body={rowData => <ActionsColumn rowData={rowData} />} />
      </DataTable>
    </div>
  );
};

export default Table;

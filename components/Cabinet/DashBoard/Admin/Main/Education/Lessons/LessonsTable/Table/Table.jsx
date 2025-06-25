import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import EmptyTable from '../../../TablesInfo/Table/EmptyTable/EmptyTable';
import Footer from '../../../TablesInfo/Table/Footer/Footer';
import NameHeader from '../../../TablesInfo/Table/TableHeaders/NameHeader';
import HeaderTemplate from '../../../TablesInfo/Table/TableHeaders/HeaderTemplate';
import ActionsLessonsColumn from './ActionsLessonsColumn/ActionsLessonsColumn';
import ConfirmWindow from '../../../TablesInfo/Table/ConfirmWindow/ConfirmWindow';

import { useDebounce } from '@/hooks/useDebounce';
import { base_url } from '@/helper/consts';
import { accessTypeList } from '@/helper/platform/coursesList';

import styles from './Table.module.scss';
import './table.scss';

const Table = ({
  selectedProducts,
  setSelectedProducts,
  search,
  activeBtn,
  setNumberOsCourses,
}) => {
  const [nameFilter, setNameFilter] = useState('1');
  const [selectedId, setSelectedId] = useState(null);
  const [accessFilter, setAccessFilter] = useState('1');
  const [currentPage, setCurrentPage] = useState(1);
  const [showDialogWindow, setShowDialogWindow] = useState(false);
  const [activeFilter, setActiveFilter] = useState('name');
  const { data: token } = useSession();
  const queryClient = useQueryClient();

  const { module_id } = useParams();
  console.log(module_id);

  const debouncedName = useDebounce(nameFilter, 500);
  const debouncedAccess = useDebounce(accessFilter, 500);

  const onDeleteLesson = () => {
    console.log(selectedId);
  };

  return (
    <div>
      {showDialogWindow && (
        <ConfirmWindow
          setShowDialogWindow={setShowDialogWindow}
          onDelete={onDeleteLesson}
          message={'Дійсно хочете видалити урок?'}
        />
      )}
      <DataTable
        value={[
          {
            id: '1',
            name: 'Test',
            access: 'Test access',
            period: 'Test period',
            time: '10:00 - 12:00',
            day: 'День 1 урок 2',
          },
        ]}
        emptyMessage={<EmptyTable message="Зараз немає даних. Додайте урок або змініть фільтр" />}
        selection={selectedProducts}
        onSelectionChange={e => setSelectedProducts(e.value)}
        resizableColumns
        showGridlines
        dataKey="id"
        selectionMode="checkbox"
        tableClassName={`${styles.table}`}
        footer={<Footer totalPage={1} setCurrentPage={setCurrentPage} currentPage={currentPage} />}
      >
        <Column selectionMode="multiple" className={styles.column} />
        <Column
          header={<NameHeader nameFilter={nameFilter} setNameFilter={setNameFilter} />}
          className={styles.column}
          field="name"
        />
        {module_id ? (
          <Column field="day" header={'Урок'} className={styles.column} />
        ) : (
          <Column
            field="access"
            header={
              <HeaderTemplate
                name={'Тип доступу'}
                list={accessTypeList}
                filter={accessFilter}
                setFilter={setAccessFilter}
              />
            }
            className={styles.column}
          />
        )}
        {module_id ? (
          <Column field="time" className={styles.column} header="Час Уроку" />
        ) : (
          <Column field="period" className={styles.column} header="Дати доступу" />
        )}
        <Column
          header=""
          body={rowData => (
            <ActionsLessonsColumn
              rowData={rowData}
              setSelectedId={setSelectedId}
              setShowDialogWindow={setShowDialogWindow}
            />
          )}
        />
      </DataTable>
    </div>
  );
};

export default Table;

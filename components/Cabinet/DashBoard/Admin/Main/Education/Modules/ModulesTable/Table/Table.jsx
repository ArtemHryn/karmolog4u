'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { format, parseISO } from 'date-fns';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { toast } from 'react-toastify';
import EmptyTable from '../../../TablesInfo/Table/EmptyTable/EmptyTable';
import Footer from '../../../TablesInfo/Table/Footer/Footer';
import NameHeader from '../../../TablesInfo/Table/TableHeaders/NameHeader';
import HeaderTemplate from '../../../TablesInfo/Table/TableHeaders/HeaderTemplate';
import ActionsModuleColumn from './ActionsModuleColumn/ActionsModuleColumn';
import ConfirmWindow from '../../../TablesInfo/Table/ConfirmWindow/ConfirmWindow';
import { ProgressSpinner } from 'primereact/progressspinner';

import styles from './Table.module.scss';
import './table.scss';
import { useDebounce } from '@/hooks/useDebounce';
import { base_url } from '@/helper/consts';
import { moduleTypes } from '@/helper/platform/modules';
import { useModuleMutation } from '@/hooks/useModuleMutation';

const fetchModules = async ({ token, filters, limit, page, courseId, activeFilter }) => {
  const { searchQuery, name, type, access } = filters;

  const params = new URLSearchParams();

  if (activeFilter === 'name') {
    params.append('name', name);
  } else if (activeFilter === 'access') {
    params.append('access', access);
  }

  params.append('page', page);
  params.append('limit', limit);
  if (searchQuery) {
    params.append('searchQuery', searchQuery);
  }

  if (Array.isArray(type) && type.length > 0) {
    params.append('type', type.join(','));
  }

  const res = await fetch(
    `${base_url}/admin/education/modules/get-all/${courseId}?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!res.ok) {
    const errorBody = await res.json();
    const message = errorBody?.message || 'Помилка завантаження модулів';
    throw new Error(message);
  }
  return res.json();
};

const Table = ({ selectedProducts, setSelectedProducts, search }) => {
  const [nameFilter, setNameFilter] = useState('1');
  const [selectedId, setSelectedId] = useState(null);
  const [typeFilter, setTypeFilter] = useState([]);
  const [accessFilter, setAccessFilter] = useState('1');
  const [currentPage, setCurrentPage] = useState(1);
  const [showDialogWindow, setShowDialogWindow] = useState(false);
  const [activeFilter, setActiveFilter] = useState('name');
  const { data: token } = useSession();

  const params = useParams();
  const courseId = params.course_id;

  const debouncedName = useDebounce(nameFilter, 500);
  const debouncedType = useDebounce(typeFilter, 500);
  const debouncedAccess = useDebounce(accessFilter, 500);

  const queryKey = ['modules', debouncedName, debouncedType, debouncedAccess, currentPage, search];
  const moduleMutation = useModuleMutation({
    token: token?.accessToken,
    queryKey,
    onSuccessCallback: () => setShowDialogWindow(false),
  });

  const {
    data: modules,
    isLoading,
    isError,
  } = useQuery({
    queryKey,
    queryFn: () =>
      fetchModules({
        token: token.accessToken,
        filters: {
          searchQuery: search,
          name: debouncedName,
          type: debouncedType,
          access: debouncedAccess,
        },
        activeFilter,
        limit: 20,
        page: currentPage,
        courseId,
      }),
    placeholderData: prevD => prevD,
  });

  if (isLoading) {
    return (
      <div className={styles.loader_wrapper}>
        <ProgressSpinner />
      </div>
    );
  }

  const onDeleteModule = () => {
    moduleMutation.mutate({ id: [selectedId] });
  };

  if (isError) return <div>Error...</div>;

  const filteredModules = () => {
    const isInvalidModule =
      !modules || !Array.isArray(modules) || modules.length === 0 || !modules[0]?.data.length === 0;
    if (isInvalidModule) return [];

    const tableData = modules[0].data.map(el => ({
      name: el.name || 'Не вказано',
      type: moduleTypes.find(type => type.value === el.type).name || 'Не вказано',
      access: `${format(parseISO(el.access.dateStart), 'dd.MM.yyyy') || 'Не вказано'} - ${
        format(parseISO(el.access.dateEnd), 'dd.MM.yyyy') || 'Не вказано'
      }`,
      id: el.id,
    }));

    return tableData;
  };

  return (
    <div>
      {showDialogWindow && (
        <ConfirmWindow
          setShowDialogWindow={setShowDialogWindow}
          onDelete={onDeleteModule}
          message={'Дійсно хочете видалити модуль?'}
        />
      )}
      <DataTable
        value={filteredModules()}
        emptyMessage={<EmptyTable message="Зараз немає даних. Додайте модуль або змініть фільтр" />}
        selection={selectedProducts}
        onSelectionChange={e => setSelectedProducts(e.value)}
        resizableColumns
        showGridlines
        dataKey="id"
        selectionMode="checkbox"
        tableClassName={`${styles.table}`}
        footer={
          <Footer
            totalPage={modules[0]?.totalPages || 1}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        }
      >
        <Column selectionMode="multiple" className={styles.column} />
        <Column
          header={
            <NameHeader
              nameFilter={nameFilter}
              setNameFilter={setNameFilter}
              setActiveFilter={() => setActiveFilter('name')}
            />
          }
          className={styles.column}
          body={rowData => (
            <div className={styles.name_column}>
              <Link
                href={`/cabinet/dashboard/admin/education/${courseId}/modules/${rowData.id}/lessons`}
              >
                {rowData.name}
              </Link>
            </div>
          )}
        />
        <Column
          field="type"
          header={
            <HeaderTemplate
              name={'Тип модулю'}
              list={moduleTypes}
              filter={typeFilter}
              setFilter={setTypeFilter}
            />
          }
          className={styles.column}
        />

        <Column
          field="access"
          header={
            <NameHeader
              title={'Період доступу'}
              nameFilter={accessFilter}
              setNameFilter={setAccessFilter}
              setActiveFilter={() => setActiveFilter('access')}
            />
          }
          className={styles.column}
        />
        <Column
          header=""
          body={rowData => (
            <ActionsModuleColumn
              rowData={rowData}
              setSelectedId={setSelectedId}
              setShowDialogWindow={setShowDialogWindow}
              showDialogWindow={showDialogWindow}
              courseId={courseId}
            />
          )}
        />
      </DataTable>
    </div>
  );
};

export default Table;

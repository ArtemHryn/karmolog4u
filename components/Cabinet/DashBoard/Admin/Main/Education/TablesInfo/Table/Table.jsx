import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { ProgressSpinner } from 'primereact/progressspinner';
import { toast, ToastContainer } from 'react-toastify';

import NameHeader from './TableHeaders/NameHeader';
import HeaderTemplate from './TableHeaders/HeaderTemplate';
import Footer from './Footer/Footer';
import { useDebounce } from '@/hooks/useDebounce';
import ActionsColumn from './ActionsColumn/ActionsColumn';
import EmptyTable from './EmptyTable/EmptyTable';

import { coursesTypeList, accessTypeList, completenessList } from '@/helper/platform/coursesList';

import { base_url } from '@/helper/consts';
import styles from './Table.module.scss';
import './table.scss';
import 'react-toastify/dist/ReactToastify.css';
import ConfirmWindow from './ConfirmWindow/ConfirmWindow';
import Link from 'next/link';

const fetchCourses = async ({ token, status, filters, limit, page }) => {
  const { searchQuery, name, type, access, completeness } = filters;

  const params = new URLSearchParams();
  params.append('name', name);
  params.append('page', page);
  params.append('limit', limit);
  if (searchQuery) {
    params.append('searchQuery', searchQuery);
  }

  if (Array.isArray(type) && type.length > 0) {
    params.append('type', type.join(','));
  }

  if (Array.isArray(access) && access.length > 0) {
    params.append('access', access.join(','));
  }

  if (Array.isArray(completeness) && completeness.length > 0) {
    params.append('completeness', completeness.join(','));
  }

  const res = await fetch(
    `${base_url}/admin/education/course/get-all/${status}?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.json();
};

const moveToArchive = async ({ token, id }) => {
  const res = await fetch(`${base_url}/admin/education/course/status/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify({ status: 'ARCHIVE' }),
  });

  if (!res.ok) {
    const errorBody = await res.json();
    const message = errorBody?.message || 'Помилка зміни статусу';
    throw new Error(message);
  }

  return res.json();
};

const deleteCourse = async ({ token, arrayOfIds }) => {
  const res = await fetch(`${base_url}/admin/education/course/delete`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ courseIds: arrayOfIds }),
  });

  if (!res.ok) {
    const errorBody = await res.json();
    const message = errorBody?.message || 'Помилка видалення';
    throw new Error(message);
  }
};

const Table = ({ activeBtn, search }) => {
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [nameFilter, setNameFilter] = useState('1');
  const [typeFilter, setTypeFilter] = useState([]);
  const [accessFilter, setAccessFilter] = useState([]);
  const [completenessFilter, setCompletenessFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDialogWindow, setShowDialogWindow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const { data: token } = useSession();
  const queryClient = useQueryClient();

  const debouncedName = useDebounce(nameFilter, 500);
  const debouncedType = useDebounce(typeFilter, 500);
  const debouncedCompleteness = useDebounce(completenessFilter, 500);
  const debouncedAccess = useDebounce(accessFilter, 500);

  const queryKey = [
    'courses',
    debouncedName,
    debouncedType,
    debouncedAccess,
    debouncedCompleteness,
    currentPage,
    activeBtn,
    search,
  ];

  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery({
    queryKey,
    queryFn: () =>
      fetchCourses({
        token: token.accessToken,
        status: activeBtn,
        filters: {
          searchQuery: search,
          name: debouncedName,
          type: debouncedType,
          access: debouncedAccess,
          completeness: debouncedCompleteness,
        },
        limit: 20,
        page: currentPage,
      }),
    placeholderData: prevD => prevD,
  });

  const mutation = useMutation({
    mutationFn: ({ id, action }) => {
      return action === 'archive'
        ? moveToArchive({ token: token.accessToken, id })
        : deleteCourse({ token: token.accessToken, arrayOfIds: [id] });
    },
    onSuccess: () => {
      toast.success('Успішно видалено курс');
      setShowDialogWindow(false);
      queryClient.invalidateQueries({ queryKey });
    },
    onError: err => {
      toast.error(`Помилка: ${err.message}`);
    },
  });

  const onDeleteCourse = () => {
    mutation.mutate({ id: selectedId, action: 'delete' });
  };

  if (isLoading) {
    return (
      <div className={styles.loader_wrapper}>
        <ProgressSpinner />
      </div>
    );
  }
  if (isError) return <div>Error...</div>;

  const filterData = () => {
    const isInvalidCourses =
      !courses || courses.length === 0 || !Array.isArray(courses) || courses[0].data.length === 0;

    if (isInvalidCourses) return [];

    const tableData = courses[0].data.map(el => ({
      name: el.name || 'Не вказано',
      type: coursesTypeList.find(courseType => courseType.value === el.type)?.name || 'Не вказано',
      stream: el.stream || 'Не вказано',
      id: el.id || 'Не вказано',
      access: accessTypeList.find(access => access.value === el.access?.type)?.name || 'Не вказано',
      completeness:
        completenessList.find(comp => comp.value === el.completeness)?.name || 'Не вказано',
      chat: el.chat,
    }));

    return tableData;
  };

  if (!courses) return null;

  return (
    <div>
      {showDialogWindow && (
        <ConfirmWindow setShowDialogWindow={setShowDialogWindow} onDeleteCourse={onDeleteCourse} />
      )}
      <DataTable
        value={filterData()}
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
              list={coursesTypeList}
              filter={typeFilter}
              setFilter={setTypeFilter}
            />
          }
          className={styles.column}
        />
        <Column field="stream" header="Потік" className={styles.column} />
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
        <Column
          field="completeness"
          header={
            <HeaderTemplate
              name={'Комплектність'}
              list={completenessList}
              filter={completenessFilter}
              setFilter={setCompletenessFilter}
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
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default Table;

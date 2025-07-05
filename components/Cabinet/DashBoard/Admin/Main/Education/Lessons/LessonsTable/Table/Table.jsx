import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProgressSpinner } from 'primereact/progressspinner';
import EmptyTable from '../../../TablesInfo/Table/EmptyTable/EmptyTable';
import Footer from '../../../TablesInfo/Table/Footer/Footer';
import NameHeader from '../../../TablesInfo/Table/TableHeaders/NameHeader';
import HeaderTemplate from '../../../TablesInfo/Table/TableHeaders/HeaderTemplate';
import ActionsLessonsColumn from './ActionsLessonsColumn/ActionsLessonsColumn';
import ConfirmWindow from '../../../TablesInfo/Table/ConfirmWindow/ConfirmWindow';
import { useLessonMutation } from '@/hooks/useLessonMutation';
import { useLessonsQuery } from '@/hooks/useLessonsQuery';

import { useDebounce } from '@/hooks/useDebounce';
import { accessTypeList } from '@/helper/platform/coursesList';

import styles from './Table.module.scss';
import './table.scss';

const Table = ({
  selectedProducts,
  setSelectedProducts,
  search,
  activeBtn,
  setNumberOfLessons,
}) => {
  const [nameFilter, setNameFilter] = useState('1');
  const [selectedId, setSelectedId] = useState(null);
  const [accessFilter, setAccessFilter] = useState('1');
  const [currentPage, setCurrentPage] = useState(1);
  const [showDialogWindow, setShowDialogWindow] = useState(false);
  const [showDialogMoveTo, setShowDialogMoveTo] = useState(false);
  const { data: token } = useSession();
  const { module_id, course_id } = useParams();
  const debouncedName = useDebounce(nameFilter, 500);
  const debouncedAccess = useDebounce(accessFilter, 500);
  const queryKey = ['lessons', debouncedName, debouncedAccess, currentPage, activeBtn, search];
  const lessonMutation = useLessonMutation({
    token: token?.accessToken,
    queryKey,
    onSuccessCallback: () => setShowDialogWindow(false),
  });

  const {
    data: lessons,
    isError,
    isLoading,
  } = useLessonsQuery({
    token: token?.accessToken,
    activeBtn,
    filters: { searchQuery: search, name: debouncedName, access: debouncedAccess },
    limit: 20,
    page: currentPage,
    moduleId: module_id,
    courseId: course_id,
  });

  const onDeleteLesson = () => {
    lessonMutation.mutate({ id: [selectedId], action: 'delete' });
  };

  useEffect(() => {
    if (lessons && lessons.length > 0) setNumberOfLessons(lessons[0].statusCounters);
  }, [lessons, setNumberOfLessons]);

  if (isLoading) {
    return (
      <div className={styles.loader_wrapper}>
        <ProgressSpinner />
      </div>
    );
  }
  if (isError) return <div>Error...</div>;

  const filteredLessons = () => {
    const isInvalidLessons =
      !lessons || lessons.length === 0 || !Array.isArray(lessons) || lessons[0].data.length === 0;

    if (isInvalidLessons) return [];

    const getAccessPeriodLabel = access => {
      if (access?.type === 'PERMANENT') return 'Безстроковий доступ';
      if (access?.type === 'FOR_PERIOD') return `${access.months} місяців`;
      const returnDate = date => {
        const d = new Date(date);
        return isNaN(d)
          ? 'Не вказано'
          : d.toLocaleDateString('uk-UA', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            });
      };
      return `з ${returnDate(access?.dateStart) || 'Не вказано'} по ${
        returnDate(access?.dateEnd) || 'Не вказано'
      }`;
    };

    const getFormattedTime = time => {
      return `${new Date(time).toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit',
      })}`;
    };

    const tableData = lessons[0].data.map(lesson => ({
      id: lesson.id,
      name: lesson.name,
      ...(module_id
        ? { day: `День ${lesson.moduleDay} Урок ${lesson.modulePart}` }
        : {
            access:
              accessTypeList.find(access => access.value === lesson.access?.type)?.name ||
              'Не вказано',
          }),
      ...(module_id
        ? {
            time: `${getFormattedTime(lesson.lessonTimeStart)}  - ${getFormattedTime(
              lesson.lessonTimeEnd
            )}`,
          }
        : {
            period: getAccessPeriodLabel(lesson.access),
          }),
    }));
    return tableData;
  };

  const onArchiveLesson = lessonId => {
    lessonMutation.mutate({ id: lessonId, action: 'archive' });
  };

  const onMoveLesson = (targetModule, lessonId) => {
    lessonMutation.mutate({ id: lessonId, action: 'move', targetModule });
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
        value={filteredLessons()}
        emptyMessage={<EmptyTable message="Зараз немає даних. Додайте урок або змініть фільтр" />}
        selection={selectedProducts}
        onSelectionChange={e => setSelectedProducts(e.value)}
        resizableColumns
        showGridlines
        dataKey="id"
        selectionMode="checkbox"
        tableClassName={`${styles.table}`}
        footer={
          <Footer
            totalPage={lessons[0]?.totalPage || 1}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        }
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
              setShowDialogMoveTo={setShowDialogMoveTo}
              showDialogMoveTo={showDialogMoveTo}
              onMoveLesson={onMoveLesson}
              showDialogWindow={showDialogWindow}
              onArchiveLesson={onArchiveLesson}
            />
          )}
        />
      </DataTable>
    </div>
  );
};

export default Table;

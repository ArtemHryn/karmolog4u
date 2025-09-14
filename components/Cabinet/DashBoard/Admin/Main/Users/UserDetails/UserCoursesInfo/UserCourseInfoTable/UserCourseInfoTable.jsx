import { DataTable } from 'primereact/datatable';
import EmptyTable from '../../../../Education/TablesInfo/Table/EmptyTable/EmptyTable';
import { Column } from 'primereact/column';
import ActionsColumn from './ActionsColumn/ActionsColumn';

import styles from './UserCourseInfoTable.module.scss';
import '../table.scss';
import { toast } from 'react-toastify';
import Status from './Status/Status';
import AccessType from './AccessType/AccessType';

const UserCourseInfoTable = ({ purchases, isError }) => {
  const productsDetails = () => {
    if (!purchases || purchases.length === 0) return [];
    if (isError) {
      toast.error('Помилка завантаження курсів користувача');
      return [];
    }

    return purchases.map(({ course, availableTo, ...data }) => ({
      ...data,
      name: course.name || 'Без назви',
      courseId: course.id,
      courseType: course.type,
      availableTo: availableTo
        ? new Date(availableTo).toLocaleString(undefined, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })
        : new Date(data.accessEndDate).toLocaleString(undefined, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          }),
    }));
  };

  return (
    <>
      <p>Доступні курси</p>
      <DataTable
        emptyMessage={
          <EmptyTable message="Зараз немає курсів." styledWrapper={styles.empty_wrapper} />
        }
        value={productsDetails()}
        tableClassName={`${styles.table}`}
        dataKey={'id'}
      >
        <Column field="name" header="Назва курсу" className={styles.column} />
        <Column
          body={rowData => <Status rowData={rowData} />}
          header="Статус"
          className={styles.column}
        />
        <Column
          body={rowData => <AccessType rowData={rowData} />}
          header="Тип Доступу"
          className={styles.column}
        />
        <Column field="availableTo" header="До" className={styles.column} />
        <Column header="" body={rowData => <ActionsColumn rowData={rowData} />} />
      </DataTable>
    </>
  );
};

export default UserCourseInfoTable;

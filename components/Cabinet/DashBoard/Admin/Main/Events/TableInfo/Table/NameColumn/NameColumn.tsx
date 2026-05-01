import styles from './NameColumn.module.scss';

interface RowData {
  name: string;
  id: string;
}

interface NameColumnProps {
  rowData: RowData;
}

const NameColumn = ({ rowData }: NameColumnProps) => {
  return (
    <a href={`/cabinet/dashboard/admin/events/edit/${rowData.id}`} className={styles.link}>
      {rowData.name}
    </a>
  );
};

export default NameColumn;

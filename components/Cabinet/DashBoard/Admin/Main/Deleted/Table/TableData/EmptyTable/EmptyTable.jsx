import styles from './EmptyTable.module.scss';

const EmptyTable = ({
  search,
  noRecords,
  noRecordsBySearch = 'Нічого не знайдено за вашим запитом.',
}) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{search.trim() === '' ? noRecords : noRecordsBySearch}</p>
    </div>
  );
};

export default EmptyTable;

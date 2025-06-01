import styles from './EmptyTable.module.scss';

const EmptyTable = () => {
  return (
    <div className={styles.wrapper}>
      <p>Зараз немає даних. Додайте курс або змініть фільтр</p>
    </div>
  );
};

export default EmptyTable;

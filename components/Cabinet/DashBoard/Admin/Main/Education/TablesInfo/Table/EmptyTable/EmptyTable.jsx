import styles from './EmptyTable.module.scss';

const EmptyTable = ({ message }) => {
  return (
    <div className={styles.wrapper}>
      <p>{message}</p>
    </div>
  );
};

export default EmptyTable;

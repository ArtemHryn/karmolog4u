import styles from './EmptyTable.module.scss';

const EmptyTable = ({ search }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        {search.trim() === ''
          ? 'У вас немає видалених продуктів'
          : 'Нічого не знайдено за вашим запитом.'}
      </p>
    </div>
  );
};

export default EmptyTable;

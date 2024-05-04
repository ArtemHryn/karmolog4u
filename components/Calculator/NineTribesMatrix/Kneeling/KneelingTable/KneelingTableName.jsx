import styles from './KneelingTable.module.scss';

const KneelingTableName = ({ table }) => {
  return (
    <ul className={styles.column_name_list}>
      {table.columnNames.map((el, index) => (
        <li key={index} className={styles.column_name_element}>
          <p className={styles.column_name_text}>{el}</p>
        </li>
      ))}
    </ul>
  );
};

export default KneelingTableName;

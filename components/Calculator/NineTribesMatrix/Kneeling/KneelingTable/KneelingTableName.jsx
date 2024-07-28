import { useLocale } from 'next-intl';
import styles from './KneelingTable.module.scss';

const KneelingTableName = ({ table }) => {
  const locale = useLocale();
  const names = Array.isArray(table.columnNames) ? table.columnNames : table.columnNames[locale];

  return (
    <ul className={styles.column_name_list}>
      {names.map((el, index) => (
        <li key={index} className={styles.column_name_element}>
          <p className={styles.column_name_text}>{el}</p>
        </li>
      ))}
    </ul>
  );
};

export default KneelingTableName;

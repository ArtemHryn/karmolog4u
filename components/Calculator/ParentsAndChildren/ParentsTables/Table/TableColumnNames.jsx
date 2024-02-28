import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import styles from './Table.module.scss';

const TableColumnNames = ({ table, isChildren }) => {
  return (
    <ul className={styles.column_names_list}>
      {isChildren && (
        <>
          <li className={styles.column_names_element}>
            <TitleNoStyles
              variant="p"
              styled={`${styles.column_name_text} ${styles.column_name_text_mob}`}
            >
              Міс.
            </TitleNoStyles>
            <TitleNoStyles
              variant="p"
              styled={`${styles.column_name_text} ${styles.column_name_text_tablet}`}
            >
              Місяць
            </TitleNoStyles>
          </li>
        </>
      )}
      {table.columnNames.map(el => (
        <li key={el} className={styles.column_names_element}>
          <TitleNoStyles variant="p" styled={styles.column_name_text}>
            {el}
          </TitleNoStyles>
        </li>
      ))}
    </ul>
  );
};

export default TableColumnNames;

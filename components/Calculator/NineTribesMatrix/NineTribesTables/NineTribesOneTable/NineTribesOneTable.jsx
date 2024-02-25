import styles from './NineTribesOneTable.module.scss';

const NineTribesOneTable = ({ table }) => {
  return (
    <li className={styles.element}>
      <ul className={styles.name_list}>
        <li className={styles.name_list_element}>
          <p className={styles.empty_box}></p>
        </li>
        {table.columnNames.map(el => (
          <li key={el} className={styles.name_list_element}>
            <p className={styles.name}>{el}</p>
          </li>
        ))}
      </ul>
      <ul>
        {table.arcanes.map((el, index) => (
          <li key={index} className={styles.arcanes_list_element}>
            <p className={styles.tribe_number}>{index + 1}</p>
            <p className={styles.tribe_arcanes}>{el.column1}</p>
            <p className={styles.tribe_arcanes}>{el.column2}</p>
            <p className={styles.tribe_arcanes}>{el.column3}</p>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NineTribesOneTable;

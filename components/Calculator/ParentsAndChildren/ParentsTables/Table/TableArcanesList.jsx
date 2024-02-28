import styles from './Table.module.scss';

const TableArcanesList = ({ arcanes }) => {
  return (
    <ul className={styles.arcanes_list}>
      {arcanes.map(({ age, column1, column2, column3 }, index) => (
        <li key={index} className={styles.arcanes_list_element}>
          <p className={styles.arcane_text}>{age}</p>
          <p className={styles.arcane_text}>{column1}</p>
          <p className={styles.arcane_text}>{column2}</p>
          <p className={styles.arcane_text}>{column3}</p>
        </li>
      ))}
    </ul>
  );
};

export default TableArcanesList;

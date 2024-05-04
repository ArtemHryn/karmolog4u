import Arrow from './Arrow';
import styles from './KneelingTable.module.scss';

const KneelingTableValues = ({ table }) => {
  return (
    <ul className={styles.values_list}>
      {table.arcanes.map((el, index) => (
        <li key={index} className={styles.values_element}>
          <p className={`${styles.values_text} ${styles.values_index}`}>{index + 1}</p>
          {index === 8 ? (
            <p className={`${styles.values_text} ${styles.values_knee}`}>
              9 <Arrow /> 1
            </p>
          ) : (
            <p className={`${styles.values_text} ${styles.values_knee}`}>
              {' '}
              {index + 2} <Arrow /> {index + 1}
            </p>
          )}
          <p className={`${styles.values_text} ${styles.values_column}`}>{el.column1}</p>
          <p className={`${styles.values_text} ${styles.values_column}`}>{el.column2}</p>
          <p className={`${styles.values_text} ${styles.values_column}`}>{el.column3}</p>
        </li>
      ))}
    </ul>
  );
};

export default KneelingTableValues;

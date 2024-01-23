import Title from '@components/Common/Title/Title';

import styles from './PeriodMap.module.scss';

const PeriodMap = ({ period }) => {
  if (!period) return;
  return (
    <div className={styles.wrapper}>
      <Title variant="h3" styled={styles.title}>
        Карта року
      </Title>
      <ul className={styles.name_list}>
        <li className={styles.name_list_element}>
          <Title variant="p" styled={styles.column_name}>
            Рік
          </Title>
          <Title variant="p" styled={styles.column_name}>
            Енергія
          </Title>
        </li>
        <li className={styles.name_list_element}>
          <Title variant="p" styled={styles.column_name}>
            Рік
          </Title>
          <Title variant="p" styled={styles.column_name}>
            Енергія
          </Title>
        </li>
        <li className={styles.name_list_element}>
          <Title variant="p" styled={styles.column_name}>
            Рік
          </Title>
          <Title variant="p" styled={styles.column_name}>
            Енергія
          </Title>
        </li>
      </ul>
      <ul className={styles.period_table}>
        {period.map(el => (
          <li key={el.age} className={styles.period_table_element}>
            <p className={styles.period_table_text}>{el.age}</p>
            <p className={styles.period_table_text}>{el.arcane}</p>
          </li>
        ))}
        <li className={styles.period_table_element}>
          <p className={styles.period_table_text}>80</p>
          <p className={styles.period_table_text}>{period[0].arcane}</p>
        </li>
        <li className={styles.period_table_element}>
          <p className={styles.period_table_text}></p>
          <p className={styles.period_table_text}></p>
        </li>
      </ul>
    </div>
  );
};

export default PeriodMap;

import Title from '@components/Common/Title/Title';

import styles from './PeriodMap.module.scss';
import PeriodMapElement from './PeriodMapElement';

const PeriodMap = ({ period, date }) => {
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
          <PeriodMapElement key={el.age} age={el.age} arcane={el.arcane} date={date} />
        ))}
        <PeriodMapElement age={'80'} arcane={period[0].arcane} date={date} />
        <PeriodMapElement age={''} arcane={''} />
      </ul>
    </div>
  );
};

export default PeriodMap;

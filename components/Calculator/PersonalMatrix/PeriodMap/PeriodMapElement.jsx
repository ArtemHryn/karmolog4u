import { useRef } from 'react';
import { addYears, format } from 'date-fns';
import { OverlayPanel } from 'primereact/overlaypanel';

import styles from './PeriodMap.module.scss';

const PeriodMapElement = ({ age, arcane, date }) => {
  const op = useRef(null);

  const addMonthsToDate = (dateString, yearsToAdd) => {
    const [day, month, year] = dateString.split('.');
    const date = new Date(year, month - 1, day);
    const newDate = addYears(date, yearsToAdd);
    return format(newDate, 'dd.MM.yyyy');
  };

  return (
    <li
      className={styles.period_table_element}
      onMouseEnter={e => date && op.current.toggle(e)}
      onMouseLeave={e => date && op.current.toggle(e)}
    >
      <p className={styles.period_table_text}>{age}</p>
      <p className={styles.period_table_text}>{arcane}</p>
      {date && (
        <OverlayPanel ref={op}>
          <p className={styles.tip}>
            {addMonthsToDate(date, age)} - {addMonthsToDate(date, age + 1.25)}
          </p>
        </OverlayPanel>
      )}
    </li>
  );
};

export default PeriodMapElement;

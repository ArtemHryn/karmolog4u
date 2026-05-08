import { useState } from 'react';
import CheckBox from './CheckBox/CheckBox';
import { Nullable } from 'primereact/ts-helpers';

import styles from './FiltersList.module.scss';
import EventCalendar from './EventCalendar/EventCalendar';
import { EventsFilter } from '@/types/events';

const checkboxData = [
  { storageKey: 'today', label: 'Сьогодні' },
  { storageKey: 'week', label: 'Цей тиждень' },
  { storageKey: 'month', label: 'Цей місяць' },
  { storageKey: 'custom', label: 'За період' },
];

interface FilterListProps extends EventsFilter {
  isOpen: boolean;
}

const FiltersList = ({ dates, setDates, checked, setChecked, isOpen }: FilterListProps) => {
  return (
    <>
      <ul className={`${styles.list} ${isOpen ? styles.show : ''}`}>
        {checkboxData.map(item => (
          <li key={item.storageKey} className={styles.list_item}>
            <CheckBox
              name="dateFilter"
              storageKey={item.storageKey}
              checked={checked === item.storageKey}
              onChange={() => setChecked(item.storageKey)}
              label={item.label}
            />
            {checked === 'custom' && item.storageKey === 'custom' && (
              <EventCalendar dates={dates} setDates={setDates} />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FiltersList;

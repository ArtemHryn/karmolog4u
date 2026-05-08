'use client';
import IsOpen from './Icons/IsOpen';
import IsClosed from './Icons/IsClosed';

import styles from './Filter.module.scss';
import FiltersList from './FiltersList/FiltersList';
import { EventsFilter } from '@/types/events';

interface IFilter extends EventsFilter {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter = ({ isOpen, setIsOpen, dates, setDates, checked, setChecked }: IFilter) => {
  return (
    <div>
      <div className={styles.button_wrapper}>
        <p className={`${styles.text} ${isOpen ? styles.open : ''}`}>За датою:</p>
        <button
          type="button"
          aria-label="показати меню"
          onClick={() => setIsOpen(prev => !prev)}
          className={styles.show_button}
        >
          <IsOpen isOpen={isOpen} /> <IsClosed isOpen={isOpen} />
        </button>
      </div>
      <FiltersList
        dates={dates}
        setDates={setDates}
        checked={checked}
        setChecked={setChecked}
        isOpen={isOpen}
      />
    </div>
  );
};

export default Filter;

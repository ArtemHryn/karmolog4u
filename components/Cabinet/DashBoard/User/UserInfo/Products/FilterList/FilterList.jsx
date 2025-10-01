import Checkbox from './Checkbox';

import styles from './FilterList.module.scss';

const FilterList = ({ checkboxes, setFilters }) => {
  return (
    <ul className={styles.list}>
      {checkboxes.map(({ label, storageKey }) => (
        <Checkbox key={storageKey} label={label} storageKey={storageKey} setFilters={setFilters} />
      ))}
    </ul>
  );
};

export default FilterList;

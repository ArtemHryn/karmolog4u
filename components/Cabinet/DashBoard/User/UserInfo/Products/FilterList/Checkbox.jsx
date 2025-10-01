'use client';

import { useEffect, useState } from 'react';

import styles from './FilterList.module.scss';

const Checkbox = ({ label, storageKey, setFilters }) => {
  const [checked, setChecked] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(checked));
    setFilters(prev => ({ ...prev, [storageKey]: checked }));
  }, [checked, storageKey, setFilters]);

  return (
    <label className={styles.checkboxWrapper} htmlFor={storageKey}>
      <input
        type="checkbox"
        checked={checked}
        onChange={({ target }) => setChecked(target.checked)}
        id={storageKey}
        className={styles.checkboxInput}
      />
      <span className={styles.customCheckbox}></span>
      {label}
    </label>
  );
};

export default Checkbox;

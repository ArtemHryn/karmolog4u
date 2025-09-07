'use client';

import { useEffect, useState } from 'react';

import styles from './FilterList.module.scss';

const Checkbox = ({ label, storageKey }) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved !== null) setChecked(JSON.parse(saved));
  }, [storageKey]);
  useEffect(() => {
    localStorage.setItem(storageKey, checked);
  }, [checked, storageKey]);
  
  return (
    <label className={styles.checkboxWrapper} htmlFor={storageKey}>
      <input
        type="checkbox"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
        id={storageKey}
        className={styles.checkboxInput}
      />
      <span className={styles.customCheckbox}></span>
      {label}
    </label>
  );
};

export default Checkbox;

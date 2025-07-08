'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import SingleForm from './SingleForm/SingleForm';

const SelectNoSSR = dynamic(() => import('react-select'), { ssr: false });

import styles from './FormSwitcher.module.scss';

const list = [
  { value: 'single', label: 'Додати користувача' },
  { value: 'import', label: 'Імпортувати нових користувачів' },
  { value: 'export', label: 'Експорт користувачів' },
];

const FormSwitcher = () => {
  const [selectedOption, setSelectedOption] = useState({
    value: 'single',
    label: 'Додати користувача',
  });

  return (
    <div className={styles.form_switcher_wrapper}>
      <SelectNoSSR
        options={list}
        value={selectedOption}
        onChange={opt => setSelectedOption(opt)}
        styles={{
          control: base => ({
            ...base,
            maxWidth: '400px',
            borderRadius: '8px',
            height: '48px',
          }),
          menu: base => ({
            ...base,
            maxWidth: '400px',
          }),
        }}
      />
      {selectedOption.value === 'single' && <SingleForm />}
    </div>
  );
};

export default FormSwitcher;

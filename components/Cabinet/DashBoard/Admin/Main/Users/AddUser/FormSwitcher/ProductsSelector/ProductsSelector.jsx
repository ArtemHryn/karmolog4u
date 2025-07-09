import { Controller } from 'react-hook-form';
import dynamic from 'next/dynamic';

const SelectNoSSR = dynamic(() => import('react-select'), { ssr: false });

import styles from './ProductsSelector.module.scss';

const list = [
  { value: 'single', label: 'Додати користувача' },
  { value: 'import', label: 'Імпортувати нових користувачів' },
  { value: 'export', label: 'Експорт користувачів' },
  { value: 'export2', label: 'Експорт користувачів2' },
];

const ProductsSelector = ({ title, control, name, isLoading }) => {
  return (
    <div className={styles.selector_wrapper}>
      <p className={styles.selector_label}>{title}</p>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <SelectNoSSR
            isMulti
            isLoading={isLoading}
            placeholder="Оберіть продукт"
            value={field.value}
            options={list}
            onChange={field.onChange}
            styles={{
              control: base => ({
                ...base,
                borderRadius: '8px',
                minHeight: '48px',
              }),
            }}
          />
        )}
      />
    </div>
  );
};

export default ProductsSelector;

import { Controller } from 'react-hook-form';
import dynamic from 'next/dynamic';

const SelectNoSSR = dynamic(() => import('react-select'), { ssr: false });

import styles from './ProductsSelector.module.scss';
import { useCoursesList } from '@/hooks/useCoursesListForUsers';

const ProductsSelector = ({ title, control, name }) => {
  const { coursesOptions, isLoading, isError } = useCoursesList();

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
            options={isError ? [] : coursesOptions}
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

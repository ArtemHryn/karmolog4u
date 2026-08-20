import { Dropdown } from 'primereact/dropdown';
import { Controller, useFormContext } from 'react-hook-form';
import 'primereact/resources/themes/saga-blue/theme.css';
import './products.scss';

import styles from './ProductsList.module.scss';
import { useEffect, useState } from 'react';

const ProductsList = ({ list, refId }) => {
  const [isCheckedProduct, setIsCheckedProduct] = useState(false);
  const {
    getValues,
    setError,
    setValue,
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    if (isCheckedProduct) return;
    if (!refId) {
      setIsCheckedProduct(true);
      return;
    }
    const currentProduct = list.find(item => item.id === refId);

    if (currentProduct) {
      setValue('product', currentProduct);
      setIsCheckedProduct(true);
    }
  }, [isCheckedProduct, list, refId, setValue]);

  return (
    <div className={styles.main_wrapper}>
      <Controller
        name="product"
        control={control}
        rules={{
          required: 'Оберіть продукт для знижки',
        }}
        render={({ field }) => (
          <div className={styles.wrapper}>
            <p className={styles.label}>Знижка на продукт</p>
            <Dropdown
              id={field.id}
              value={getValues('product')}
              onChange={e => {
                setValue('product', e.value);
                setError('product', null);
              }}
              options={list}
              optionLabel="name.uk"
              filter
              placeholder="Оберіть продукт для знижки"
            />
          </div>
        )}
      />
      {errors?.product && <p className={styles.error}>{errors.product.message}</p>}
    </div>
  );
};

export default ProductsList;

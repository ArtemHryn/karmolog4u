import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ProductsSelector from '../ProductsSelector/ProductsSelector';

import styles from './ExportUsersForm.module.scss';
import SubmitButtons from '../SubmitButtons/SubmitButtons';

const ExportUsersForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit } = useForm({ defaultValues: { products: [] } });

  const onFormSubmit = data => {
    console.log(data);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
      <ProductsSelector
        title={'Додати до продукту'}
        control={control}
        name={'products'}
        isLoading={isLoading}
      />
      <SubmitButtons />
    </form>
  );
};

export default ExportUsersForm;

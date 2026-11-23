import { useForm } from 'react-hook-form';
import ProductsSelector from '../ProductsSelector/ProductsSelector';

import styles from './ExportUsersForm.module.scss';
import SubmitButtons from '../SubmitButtons/SubmitButtons';
import { useCreateUser } from '@/hooks/useCreateUser';
import { useSession } from 'next-auth/react';

const ExportUsersForm = () => {
  const { control, handleSubmit, reset } = useForm({ defaultValues: { education: [] } });
  const { data: token } = useSession();
  const mutateUser = useCreateUser({ token: token?.accessToken, onSuccessCallback: () => reset() });

  const onFormSubmit = data => {
    const { education = [] } = data;
    if (education?.length === 0) {
      mutateUser.mutate({ action: 'export' });
      return;
    }
    mutateUser.mutate({ data: education?.map(({ value }) => value), action: 'export' });
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
      <ProductsSelector title={'Експортувати за продуктом'} control={control} name={'education'} />
      <SubmitButtons submitName={'Завантажити'} />
    </form>
  );
};

export default ExportUsersForm;

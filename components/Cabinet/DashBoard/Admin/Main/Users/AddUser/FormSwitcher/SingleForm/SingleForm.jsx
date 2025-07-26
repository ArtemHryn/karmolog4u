import { useForm } from 'react-hook-form';
import Tick from '../Tick/Tick';
import SubmitButtons from '../SubmitButtons/SubmitButtons';

import styles from './SingleForm.module.scss';
import ProductsSelector from '../ProductsSelector/ProductsSelector';
import { useCreateUser } from '@/hooks/useCreateUser';
import { useSession } from 'next-auth/react';

const SingleForm = () => {
  const { register, control, handleSubmit, reset } = useForm({ defaultValues: { education: [] } });
  const { data: token } = useSession();

  const mutateUser = useCreateUser({ token: token?.accessToken, onSuccessCallback: () => reset() });

  const onFormSubmit = data => {
    const { education, ...otherData } = data;
    const dataToSend = {
      ...otherData,
      mobPhone: '+380',
      education: education.map(({ value }) => value),
    };
    console.log(dataToSend);
    mutateUser.mutate({ data: dataToSend, action: 'add_user' });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
      <div className={styles.name_wrapper}>
        <label className={styles.label}>
          {"Ім'я"}
          <input
            type="text"
            {...register('name', { required: true })}
            className={`${styles.input}`}
          />
        </label>
        <label className={styles.label}>
          Прізвище
          <input
            type="text"
            {...register('lastName', { required: true })}
            className={`${styles.input}`}
          />
        </label>
      </div>
      <label className={styles.label}>
        Email
        <input
          type="email"
          {...register('email', { required: true })}
          className={`${styles.input}`}
        />
      </label>
      <ProductsSelector title={'Додати до продукту'} control={control} name={'education'} />

      <div className={styles.ticks_wrapper}>
        <Tick
          name={'Згенерувати та надіслати пароль на електронну пошту'}
          id="1"
          register={register}
          form_name={'sendToEmail'}
        />
        <Tick
          name={'Обліковий запис користувача активний'}
          id="2"
          register={register}
          form_name={'verified'}
        />
      </div>
      <SubmitButtons />
    </form>
  );
};

export default SingleForm;

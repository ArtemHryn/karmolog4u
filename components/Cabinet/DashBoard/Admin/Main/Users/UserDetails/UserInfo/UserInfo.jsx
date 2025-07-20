'use client';
import { FormProvider, useForm } from 'react-hook-form';
import Input from './Input';

import styles from './UserInfo.module.scss';
import SubmitButtons from './SubmitButtons';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const UserInfo = ({ userDetails }) => {
  const { name, lastName, email, mobPhone } = userDetails;
  const methods = useForm({
    defaultValues: { name, lastName, email, mobPhone },
  });

  const { handleSubmit, formState } = methods;

  const onFormSubmit = data => {
    console.log(data);
  };

  useEffect(() => {
    const error = formState.errors?.email;
    if (error?.type === 'pattern') {
      toast.error(error.message);
    }
  }, [formState.errors?.email]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onFormSubmit)} className={styles.form}>
        <div className={styles.labels_wrapper}>
          <Input label="Ім’я" name="name" />
          <Input label="Прізвище" name="lastName" />
          <Input
            label="Email"
            name="email"
            rules={{
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Введіть коректний email',
              },
            }}
          />
          <Input label="Телефон" name={'mobPhone'} />
        </div>
        {formState.isDirty && <SubmitButtons />}
      </form>
    </FormProvider>
  );
};

export default UserInfo;

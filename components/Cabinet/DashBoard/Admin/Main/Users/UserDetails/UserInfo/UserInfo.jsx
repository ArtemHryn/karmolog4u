'use client';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import Input from './Input';

import styles from './UserInfo.module.scss';
import SubmitButtons from './SubmitButtons';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import Tick from '../../../Education/TablesInfo/Table/TableHeaders/Tick';

const UserInfo = ({ userDetails }) => {
  const { name, lastName, email, mobPhone, banned, role } = userDetails;
  const methods = useForm({
    defaultValues: { name, lastName, email, mobPhone, banned, isAdmin: role === 'ADMIN' },
  });

  const { handleSubmit, formState, control } = methods;

  const onFormSubmit = data => {
    const { isAdmin, ...otherData } = data;
    const editedData = { ...otherData, role: isAdmin ? 'ADMIN' : 'USER' };
    console.log(editedData);
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
        <div className={styles.ticks_wrapper}>
          <Controller
            control={control}
            name="isAdmin"
            render={({ field }) => (
              <Tick
                name="Зробити адміністратором"
                id="2"
                setTick={field.onChange}
                tick={field.value}
              />
            )}
          />
          <Controller
            control={control}
            name="banned"
            render={({ field }) => (
              <Tick name="Заблокований" id="1" setTick={field.onChange} tick={field.value} />
            )}
          />
        </div>
        {formState.isDirty && <SubmitButtons />}
      </form>
    </FormProvider>
  );
};

export default UserInfo;

'use client';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import Input from './Input';

import styles from './UserInfo.module.scss';
import SubmitButtons from './SubmitButtons';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import Tick from '../../../../Education/TablesInfo/Table/TableHeaders/Tick';
import { base_url } from '@/helper/consts';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

const updateUser = async ({ token, id, data }) => {
  const res = await fetch(`${base_url}/admin/user/update/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
  const parsedData = await res.json();

  if (!res.ok) {
    const message = Array.isArray(parsedData?.message)
      ? parsedData?.message[0] || 'Помилка оновлення користувача'
      : parsedData?.message || 'Помилка оновлення користувача';

    throw new Error(message);
  }

  return parsedData;
};

const UserInfo = ({ userDetails }) => {
  const { data: token } = useSession();
  const { name, lastName, email, mobPhone, banned, role } = userDetails;
  const methods = useForm({
    defaultValues: { name, lastName, email, mobPhone, banned, isAdmin: role === 'ADMIN' },
  });

  const { handleSubmit, formState, control } = methods;

  const mutation = useMutation({
    mutationFn: ({ data }) => updateUser({ data, token: token?.accessToken, id: userDetails._id }),
    onSuccess: () => {
      toast.success('Успішно оновленно', { autoClose: 1000 });
    },
    onError: err => {
      toast.error(err.message, { autoClose: 1000 });
    },
  });

  const onFormSubmit = data => {
    const { isAdmin, ...otherData } = data;
    const editedData = { ...otherData, role: isAdmin ? 'ADMIN' : 'USER' };
    mutation.mutate({ data: editedData });
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

'use client';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { useMutation } from '@tanstack/react-query';
import SubmitButtons from './SubmitButtons';
import { base_url } from '@/helper/consts';

import styles from './PersonalInfo.module.scss';
import { toast } from 'react-toastify';
import DoubleInputField from './DoubleInputField/DoubleInputField';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';

const updateUserInfo = async (data, token) => {
  const response = await fetch(`${base_url}/user/update`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const parsedResponse = await response.json();
  if (!response.ok) {
    const message = parsedResponse?.message || 'Помилка при оновленні даних користувача';
    throw new Error(message);
  }
  return parsedResponse;
};

const PersonalInfo = ({ user: { name, lastName, email, mobPhone, cover = null } }) => {
  const router = useRouter();
  const { data: userInfo, update } = useSession();
  const methods = useForm({
    defaultValues: { name, email, lastName, mobPhone, cover },
  });

  const { handleSubmit, formState, reset } = methods;

  const mutation = useMutation({
    mutationFn: data => updateUserInfo(data, userInfo.accessToken),
    onSuccess: () => {
      update();
      router.refresh();
    },
    onError: error => {
      console.error('Error updating user info:', error);
      toast.error(error || 'Помилка при оновленні даних користувача');
    },
  });

  const onSubmit = data => {
    mutation.mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.main_wrapper}>
          <ProfilePhoto />
          <DoubleInputField
            label="1. Ім'я та прізвище"
            fields={[
              { name: 'name', type: 'text', validation: { required: true } },
              { name: 'lastName', type: 'text', validation: { required: true } },
            ]}
          />
          <DoubleInputField
            label={'2. Електронна пошта та телефон'}
            fields={[
              {
                name: 'email',
                type: 'email',
                validation: {
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Введіть коректний email',
                  },
                },
              },
              {
                name: 'mobPhone',
                type: 'text',
                validation: {
                  minLength: {
                    value: 12,
                    message: 'Номер телефону має містити 12 цифр',
                  },
                },
              },
            ]}
          />
        </div>
        {formState.isDirty && <SubmitButtons reset={reset} />}
      </form>
    </FormProvider>
  );
};

export default PersonalInfo;

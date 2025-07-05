'use client';

import { useParams, useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import Name from './FormParts/Name';
import TypeModule from './FormParts/TypeModule';
import StartEndDate from './FormParts/StartEndDate';
import NumberOfDays from './FormParts/NumberOfDays';
import ActionButtons from './FormParts/ActionButtons';

import styles from './Form.module.scss';
import { base_url } from '@/helper/consts';

async function AddOrUpdateCourse({ data, token, action, id }) {
  const url =
    action === 'add'
      ? `${base_url}/admin/education/modules/create`
      : `${base_url}/admin/education/modules/edit/${id}`;

  const res = await fetch(url, {
    method: action === 'add' ? 'POST' : 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorMessage = await res.json();
    throw new Error(errorMessage.message || 'Не вдалося надіслати дані');
  }

  return res.json();
}

const setDefaultFormFields = items => {
  if (!items) return {};
  const {
    name,
    type,
    durationInDays,
    access: { dateStart, dateEnd },
  } = items;
  return { name, type, durationInDays, dateStart: new Date(dateStart), dateEnd: new Date(dateEnd) };
};

const Form = ({ editModule }) => {
  const router = useRouter();
  const { data: token } = useSession();
  const methods = useForm({ defaultValues: setDefaultFormFields(editModule) });
  const params = useParams();
  const courseId = params.course_id;

  const mutation = useMutation({
    mutationFn: ({ info }) =>
      AddOrUpdateCourse({
        data: info,
        token: token.accessToken,
        action: editModule ? 'edit' : 'add',
        id: editModule ? editModule.id : '',
      }),
    onSuccess: () => {
      toast.success(!!editModule ? 'Зміни успішно внесено' : 'Запис успішно додано!', {
        autoClose: 1000,
      });
      setTimeout(() => router.push(`/cabinet/dashboard/admin/education/${courseId}/modules`), 1500);
    },
    onError: err => {
      toast.error(`Помилка: ${err.message}`);
    },
  });

  const onFormSubmit = data => {
    const { name, type, dateStart, dateEnd, durationInDays } = data;
    const addModuleParams = {
      name,
      type,
      access: { dateStart, dateEnd },
      durationInDays,
      course: courseId,
    };
    mutation.mutate({ info: addModuleParams });
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onFormSubmit)} className={styles.form}>
        <div className={styles.form_parts}>
          <Name title="1. Назва модулю:" placeholder="Введіть назву модулю (до 40 символів)" />
          <TypeModule />
          <StartEndDate />
          <NumberOfDays />
        </div>
        <ActionButtons isEditModule={!!editModule} />
      </form>
    </FormProvider>
  );
};

export default Form;

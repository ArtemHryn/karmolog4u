'use client';
import { FormProvider, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import AgreementUserData from '../AgreementUserData/AgreementUserData';
import AgreementSocial from '../AgreementSocial/AgreementSocial';

import Definitions from '../Definitions/Definitions';
import SubmitForm from '../SubmitForm/SubmitForm';
import { AgreementBodyProps } from '@/types/cons_adv_courses';
import { base_url } from '@/helper/consts';

import styles from './AgreementForm.module.scss';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';

type dataProps = Record<string, string>;

type AgreePayload = {
  data: dataProps;
  token: string;
  id: string;
};

const fetchAgreeToAgreement = async ({ data, token, id }: AgreePayload) => {
  const res = await fetch(`${base_url}/contract/sign/${id}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const errorMessage = await res.json();
    throw new Error(errorMessage.message || 'Помилка відписання договору');
  }
  return res.json();
};

const AgreementForm = ({ user }: AgreementBodyProps) => {
  const { data: token } = useSession();
  const params = useParams();
  const method = useForm({
    defaultValues: {
      fullName: `${user?.lastName || ''} ${user?.name || ''}`,
      phone: user?.mobPhone || '',
    },
  });

  const mutate = useMutation({
    mutationFn: (data: dataProps) =>
      fetchAgreeToAgreement({
        data,
        token: token?.accessToken ?? '',
        id: params.course_id as string,
      }),
  });

  const onSubmit = (data: dataProps) => {
    const { telegram, viber, whatsapp, isAgree, ...rest } = data;
    const assignData = {
      ...rest,
      messenger: `${telegram ? 'telegram;' : ''} ${viber ? 'viber;' : ''} ${whatsapp ? 'whatsapp' : ''}`,
    };
    mutate.mutate(assignData);
  };
  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)} className={styles.form}>
        <AgreementUserData />
        <AgreementSocial />
        <Definitions />
        <SubmitForm isPending={mutate.isPending} />
      </form>
    </FormProvider>
  );
};

export default AgreementForm;

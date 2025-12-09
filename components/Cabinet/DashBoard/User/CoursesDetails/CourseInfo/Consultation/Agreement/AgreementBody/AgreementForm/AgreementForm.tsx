'use client';
import { FormProvider, useForm } from 'react-hook-form';
import AgreementUserData from '../AgreementUserData/AgreementUserData';
import AgreementSocial from '../AgreementSocial/AgreementSocial';

import Definitions from '../Definitions/Definitions';
import SubmitForm from '../SubmitForm/SubmitForm';
import { AgreementBodyProps } from '@/types/cons_adv_courses';

import styles from './AgreementForm.module.scss';

const AgreementForm = ({ user }: AgreementBodyProps) => {
  const method = useForm({
    defaultValues: {
      fullName: `${user?.lastName || ''} ${user?.name || ''}`,
      mobPhone: user?.mobPhone || '',
    },
  });
  const onSubmit = (data: Record<string, string>) => {
    console.log(data);
  };
  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)} className={styles.form}>
        <AgreementUserData />
        <AgreementSocial />
        <Definitions />
        <SubmitForm />
      </form>
    </FormProvider>
  );
};

export default AgreementForm;

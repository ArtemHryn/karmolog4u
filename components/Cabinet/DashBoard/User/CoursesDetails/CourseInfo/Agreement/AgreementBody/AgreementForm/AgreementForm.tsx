'use client';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'next/navigation';
import { useMutation, UseQueryResult } from '@tanstack/react-query';
import AgreementUserData from '../AgreementUserData/AgreementUserData';
import AgreementSocial from '../AgreementSocial/AgreementSocial';
import Definitions from '../Definitions/Definitions';
import SubmitForm from '../SubmitForm/SubmitForm';

import { fetchAgreeToAgreement } from '@/helper/platform/agreementFetch';
import { AgreementBodyProps, Contract } from '@/types/cons_adv_courses';

import styles from './AgreementForm.module.scss';
import { toast } from 'react-toastify';

interface FormValues {
  fullname: string;
  phone: string;
  idCode: string;
  passportData: string;
  telegram: boolean;
  viber: boolean;
  whatsapp: boolean;
  isAgree: boolean;
}

interface DefaultValuesData {
  agreement?: boolean;
  name?: string;
  lastName?: string;
  mobPhone?: string;
  fullname?: string;
  phone?: string;
  idCode?: string;
  passportData?: string;
  telegram?: boolean;
  viber?: boolean;
  whatsapp?: boolean;
}

const getDefaultValues = (agreementInfo: DefaultValuesData): Partial<FormValues> => {
  if (agreementInfo?.agreement) {
    const { fullname, phone, idCode, passportData, telegram, viber, whatsapp } = agreementInfo;
    return {
      fullname,
      phone,
      idCode,
      passportData,
      telegram,
      viber,
      whatsapp,
    };
  }
  return {
    fullname: `${agreementInfo?.lastName || ''} ${agreementInfo?.name || ''}`,
    phone: agreementInfo?.mobPhone || '',
  };
};

interface AgreementFormProps extends AgreementBodyProps {
  data: UseQueryResult<Contract>;
}

const AgreementForm = ({ user, token, data }: AgreementFormProps) => {
  const params = useParams();

  const { data: agreementData, isError, isLoading } = data;

  const method = useForm<FormValues>({
    defaultValues: getDefaultValues(user),
  });

  const mutate = useMutation({
    mutationFn: (data: Record<string, string>) =>
      fetchAgreeToAgreement({
        data,
        token,
        id: params.course_id as string,
      }),
    onSuccess: () => {
      toast.success('Договір успішно підписаний');
    },
  });

  const onSubmit = (data: FormValues) => {
    const { telegram, viber, whatsapp, isAgree, ...rest } = data;
    const assignData = {
      ...rest,
      messenger: `${telegram ? 'telegram;' : ''} ${viber ? 'viber;' : ''} ${whatsapp ? 'whatsapp' : ''}`,
    };
    mutate.mutate(assignData);
  };

  useEffect(() => {
    if (isLoading || isError || !agreementData?.agreement || !agreementData?.contractDetails)
      return;
    const messengers = agreementData.contractDetails.messenger.split(';').map(i => i.trim());

    method.reset(
      getDefaultValues({
        ...agreementData.contractDetails,
        agreement: agreementData.agreement,
        telegram: messengers.includes('telegram'),
        viber: messengers.includes('viber'),
        whatsapp: messengers.includes('whatsapp'),
      })
    );
  }, [agreementData, isLoading, isError, method]);

  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)} className={styles.form}>
        <AgreementUserData />
        <AgreementSocial />
        <Definitions data={agreementData?.contractDetails?.points || []} />
        <SubmitForm
          isPending={mutate.isPending}
          isAssigned={!!agreementData?.agreement}
          signUpTo={agreementData?.contractDetails.signUpTo || ''}
        />
      </form>
    </FormProvider>
  );
};

export default AgreementForm;

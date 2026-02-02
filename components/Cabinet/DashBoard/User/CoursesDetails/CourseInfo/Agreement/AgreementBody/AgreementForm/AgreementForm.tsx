'use client';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import { useMutation, useQuery } from '@tanstack/react-query';
import AgreementUserData from '../AgreementUserData/AgreementUserData';
import AgreementSocial from '../AgreementSocial/AgreementSocial';
import Definitions from '../Definitions/Definitions';
import SubmitForm from '../SubmitForm/SubmitForm';

import { fetchAgreeToAgreement, getAgreementData } from '@/helper/platform/agreementFetch';
import { AgreementBodyProps } from '@/types/cons_adv_courses';

import styles from './AgreementForm.module.scss';

type dataProps = Record<string, string>;

const getDefaultValues = (agreementInfo: dataProps) => {
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

const AgreementForm = ({ user }: AgreementBodyProps) => {
  const { data: token } = useSession();
  const params = useParams();
  const {
    data: agreementData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['agreement', params.course_id],
    queryFn: () => getAgreementData(params.course_id as string, token?.accessToken ?? ''),
    enabled: !!token?.accessToken,
  });

  const method = useForm({
    defaultValues: getDefaultValues(user),
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

  useEffect(() => {
    if (isLoading || isError || !agreementData?.data) return;
    console.log(agreementData.data.contractDetails);
    const [telegram, viber, whatsapp] = agreementData.data.contractDetails.messenger.split(';');

    method.reset(
      getDefaultValues({
        ...agreementData.data.contractDetails,
        agreement: agreementData.data.agreement,
        telegram: telegram ? true : false,
        viber: viber ? true : false,
        whatsapp: whatsapp ? true : false,
      })
    );
  }, [agreementData, isLoading, isError, method]);

  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)} className={styles.form}>
        <AgreementUserData />
        <AgreementSocial />
        <Definitions />
        <SubmitForm isPending={mutate.isPending} isAssigned={!!agreementData?.data?.agreement} />
      </form>
    </FormProvider>
  );
};

export default AgreementForm;

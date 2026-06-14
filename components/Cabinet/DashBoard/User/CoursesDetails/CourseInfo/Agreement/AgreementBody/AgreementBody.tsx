'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import AgreementHeader from './AgreementHeader/AgreementHeader';
import AgreementTitle from './AgreementTitle/AgreementTitle';
import AgreementForm from './AgreementForm/AgreementForm';

import { AgreementBodyProps } from '@/types/cons_adv_courses';
import { getAgreementData } from '@/helper/platform/agreementFetch';
import styles from './AgreementBody.module.scss';

const AgreementBody = ({ user, token }: AgreementBodyProps) => {
  const params = useParams();

  const agreementData = useQuery({
    queryKey: ['agreement', params.course_id],
    queryFn: () => getAgreementData(params.course_id as string, token),
    enabled: !!token,
  });

  if (!agreementData.data) return null;
  console.log(agreementData.data.contractDetails.header);

  return (
    <div className={styles.wrapper}>
      <AgreementTitle contractDate={agreementData.data.contractDetails.contractDate} />
      <AgreementHeader header={agreementData.data.contractDetails.header} />
      <AgreementForm user={user} token={token} data={agreementData} />
    </div>
  );
};

export default AgreementBody;

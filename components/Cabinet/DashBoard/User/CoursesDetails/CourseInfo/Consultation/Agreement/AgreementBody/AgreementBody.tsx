import AgreementHeader from './AgreementHeader/AgreementHeader';
import AgreementTitle from './AgreementTitle/AgreementTitle';

import styles from './AgreementBody.module.scss';
import AgreementForm from './AgreementForm/AgreementForm';
import { AgreementBodyProps } from '@/types/cons_adv_courses';

const AgreementBody = async ({ user }: AgreementBodyProps) => {
  return (
    <div className={styles.wrapper}>
      <AgreementTitle />
      <AgreementHeader />
      <AgreementForm user={user} />
    </div>
  );
};

export default AgreementBody;

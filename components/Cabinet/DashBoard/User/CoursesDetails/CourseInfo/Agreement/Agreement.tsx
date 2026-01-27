import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import AgreementBody from './AgreementBody/AgreementBody';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import styles from './Agreement.module.scss';
import { ToastContainer } from 'react-toastify';

const Agreement = async () => {
  // @ts-expect-error: JS authOptions is untyped
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('User is not authenticated');
  }
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.title_wrapper}>
        <TitleNoStyles variant="h2" styled={styles.title}>
          Договір
        </TitleNoStyles>
        <TitleNoStyles variant="p" styled={styles.text}>
          про надання освітньо-навчальних послуг
        </TitleNoStyles>
      </div>
      <AgreementBody user={session.user} />
      <ToastContainer />
    </div>
  );
};

export default Agreement;

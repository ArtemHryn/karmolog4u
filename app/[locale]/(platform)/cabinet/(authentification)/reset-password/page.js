import BackButton from '@/components/Cabinet/Authentication/BackButton/BackButton';
import ResetPasswordForm from '@/components/Cabinet/Authentication/ResetPassword/ResetPasswordForm';
import Container from '@/components/Common/Container/Container';

import styles from '../login/loginPage.module.scss';

const ResetPasswordPage = () => {
  return (
    <Container styledSection={styles.section}>
      <ResetPasswordForm />
    </Container>
  );
};

export default ResetPasswordPage;

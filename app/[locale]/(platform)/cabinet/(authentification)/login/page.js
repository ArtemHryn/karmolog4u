import LoginForm from '@/components/Cabinet/Authentication/Login/LoginForm';
import Container from '@/components/Common/Container/Container';

import styles from './loginPage.module.scss';

const LoginPage = async () => {
  return (
    <Container styledSection={styles.section}>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;

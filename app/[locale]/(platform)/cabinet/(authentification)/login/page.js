import BackButton from '@components/Cabinet/Authentification/BackButton/BackButton';
import LoginForm from '@components/Cabinet/Authentification/Login/LoginForm';
import Container from '@components/Common/Container/Container';

import styles from './loginPage.module.scss';

const login = () => {
  return (
    <Container styledSection={styles.section}>
      <BackButton />
      <LoginForm />
    </Container>
  );
};

export default login;

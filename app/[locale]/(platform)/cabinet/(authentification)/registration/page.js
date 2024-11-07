import Container from '@components/Common/Container/Container';

import styles from '../login/loginPage.module.scss';
import BackButton from '@components/Cabinet/Authentication/BackButton/BackButton';
import RegistrationForm from '@components/Cabinet/Authentication/Registration/RegistrationForm';

const RegistrationPage = () => {
  return (
    <Container styledSection={styles.section}>
      <BackButton />
      <RegistrationForm />
    </Container>
  );
};

export default RegistrationPage;

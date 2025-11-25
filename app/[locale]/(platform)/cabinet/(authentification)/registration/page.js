import Container from '@/components/Common/Container/Container';

import styles from '../login/loginPage.module.scss';
import RegistrationForm from '@/components/Cabinet/Authentication/Registration/RegistrationForm';

const RegistrationPage = () => {
  return (
    <Container styledSection={styles.section}>
      <RegistrationForm />
    </Container>
  );
};

export default RegistrationPage;

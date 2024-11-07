import BackButton from '@components/Cabinet/Authentication/BackButton/BackButton';
import ResetPasswordForm from '@components/Cabinet/Authentication/ResetPassword/ResetPasswordForm';
import Container from '@components/Common/Container/Container';

const ResetPasswordPage = () => {
  return (
    <Container>
      <BackButton />
      <ResetPasswordForm />
    </Container>
  );
};

export default ResetPasswordPage;

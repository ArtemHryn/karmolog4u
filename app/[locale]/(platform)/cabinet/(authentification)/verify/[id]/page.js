import VerifyUser from '@/components/Cabinet/Authentication/VerifyUser/VerifyUser';

const VerifyUserPage = ({ params }) => {
  const { id } = params;
  return <VerifyUser id={id} />;
};

export default VerifyUserPage;

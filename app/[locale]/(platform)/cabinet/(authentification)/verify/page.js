import VerifyUser from '@/components/Cabinet/Authentication/VerifyUser/VerifyUser';

const VerifyUserPage = ({ searchParams }) => {

  return <VerifyUser token={searchParams.token} />;
};

export default VerifyUserPage;

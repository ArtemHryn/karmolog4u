import VerifyUser from '@/components/Cabinet/Authentication/VerifyUser/VerifyUser';

const VerifyUserPage = ({ searchParams }) => {
  console.log(searchParams);

  return <VerifyUser token={searchParams.token} />;
};

export default VerifyUserPage;

import ChangeColor from '@components/Cabinet/DashBoard/ChangeColor/ChangeColor';

const DashboardPage = ({ children }) => {
  return (
    <>
      <ChangeColor>{children}</ChangeColor>
    </>
  );
};

export default DashboardPage;

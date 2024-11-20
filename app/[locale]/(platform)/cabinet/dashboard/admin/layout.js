import AsideBar from '@components/Cabinet/DashBoard/Admin/AsideBar/AsideBar';

const AdminLayout = ({ children }) => {
  return (
    <>
      <AsideBar />
      {children}
    </>
  );
};

export default AdminLayout;

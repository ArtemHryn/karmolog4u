import AsideBar from '@components/Cabinet/DashBoard/Admin/AsideBar/AsideBar';
import Header from '@components/Cabinet/DashBoard/Admin/Header/Header';

const AdminLayout = ({ children }) => {
  return (
    <>
      <Header />
      <AsideBar />
      {children}
    </>
  );
};

export default AdminLayout;

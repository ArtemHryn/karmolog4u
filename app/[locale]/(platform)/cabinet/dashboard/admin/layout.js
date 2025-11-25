import AsideBar from '@/components/Cabinet/DashBoard/Admin/AsideBar/AsideBar';
import Header from '@/components/Cabinet/DashBoard/Admin/Header/Header';
import ChangeColor from '@/components/Cabinet/DashBoard/ChangeColor/ChangeColor';
import PageProgress from '@/components/Common/PageProgress/PageProgress';

const AdminLayout = ({ children }) => {
  return (
    <PageProgress color="#2961e0">
      {' '}
      <ChangeColor>
        <Header />
        <AsideBar />
        {children}
      </ChangeColor>
    </PageProgress>
  );
};

export default AdminLayout;

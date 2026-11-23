import PageProgress from '../../../../../../components/Common/PageProgress/PageProgress';
import RoleGuard from '../../../../../../components/Common/RoleGuard/RoleGuard';

const UserLayout = ({ children }) => {
  return (
    <RoleGuard allowedRole="USER">
      <PageProgress color="#cfb691">{children}</PageProgress>
    </RoleGuard>
  );
};

export default UserLayout;

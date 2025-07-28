import Layout from '@components/Cabinet/Authentication/Layout/Layout';
import PageProgress from '@/components/Common/PageProgress/PageProgress';

const AuthLayout = ({ children }) => {
  return (
    <PageProgress color="#cfb691">
      <Layout>{children}</Layout>
    </PageProgress>
  );
};

export default AuthLayout;

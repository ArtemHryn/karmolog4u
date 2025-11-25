import UserHeader from '@/components/Cabinet/DashBoard/Admin/Main/Products/Users/UserHeader/UserHeader';

import styles from './page.module.scss';
import AddUser from '@/components/Cabinet/DashBoard/Admin/Main/Products/Users/AddUser/AddUser';

const AddUserPage = () => {
  return (
    <main className={styles.main}>
      <UserHeader onlyDesktop />
      <AddUser />
    </main>
  );
};

export default AddUserPage;

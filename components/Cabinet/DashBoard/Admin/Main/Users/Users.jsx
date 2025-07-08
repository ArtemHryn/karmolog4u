import UserHeader from './UserHeader/UserHeader';
import UserList from './UserList/UserList';

import styles from './Users.module.scss';

const Users = () => {
  return (
    <main className={styles.main}>
      <UserHeader title={'Користувачі'} />
      <UserList />
    </main>
  );
};

export default Users;

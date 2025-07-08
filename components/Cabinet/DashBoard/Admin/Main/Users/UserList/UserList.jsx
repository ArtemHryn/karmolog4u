import UsersTable from './UsersTable/UsersTable';
import UsersFilter from './UsersFilter/UsersFilter';

import styles from './UserList.module.scss';

const UserList = () => {
  return (
    <div className={styles.users_lists_wrapper}>
      <UsersFilter />
      <UsersTable />
    </div>
  );
};

export default UserList;

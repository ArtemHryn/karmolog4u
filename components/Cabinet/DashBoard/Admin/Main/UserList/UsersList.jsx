import styles from './UsersList.module.scss';
import UsersTable from './UsersTable/UsersTable';

const UserList = () => {
  return (
    <main className={styles.main}>
      <UsersTable />
    </main>
  );
};

export default UserList;

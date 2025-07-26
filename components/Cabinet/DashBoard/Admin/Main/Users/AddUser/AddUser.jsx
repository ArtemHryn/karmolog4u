import NavUsersLinks from '../NavUsersLinks/NavUsersLinks';
import FormSwitcher from './FormSwitcher/FormSwitcher';


import styles from './AddUser.module.scss'

const AddUser = () => {
  return (
    <div className={styles.wrapper}>
      <NavUsersLinks navList={[{ name: 'Додати', link: '#' }]} />
      <FormSwitcher />
    </div>
  );
};

export default AddUser;

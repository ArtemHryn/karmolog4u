import UserHeader from '../UserHeader/UserHeader';
import LoginDetails from './LoginDetails/LoginDetails';
import UserInfo from './UserInfo/UserInfo';

import styles from './UserDetails.module.scss';
import UserCoursesInfo from './UserCoursesInfo/UserCoursesInfo';
import UserProductsInfo from './UserProductsInfo/UserProductsInfo';
import UserPaymentTable from './UserPaymentTable/UserPaymentTable';

const UserDetails = ({ userDetails }) => {
  return (
    <>
      <UserHeader title={`Дані користувача`} onlyDesktop />
      <div className={styles.user_details_wrapper}>
        <LoginDetails userDetails={userDetails} />
        <UserInfo userDetails={userDetails} />
        <UserCoursesInfo />
        <UserProductsInfo />
        <UserPaymentTable userDetails={userDetails} />
      </div>
    </>
  );
};

export default UserDetails;

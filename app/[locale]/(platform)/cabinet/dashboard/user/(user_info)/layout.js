import Header from '@/components/Cabinet/DashBoard/User/UserInfo/Header/Header';
import SideBar from '@/components/Cabinet/DashBoard/User/UserInfo/SideBar/SideBar';
import EventPanel from '@/components/Cabinet/DashBoard/User/UserInfo/EventPanel/EventPanel';
import UserFooter from '@/components/Cabinet/DashBoard/User/Footer/Footer';

import styles from './layout.module.scss';

const UserInfoLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.body}>
        <SideBar />
        <main>{children}</main>
        <EventPanel />
      </div>
      <UserFooter />
    </div>
  );
};

export default UserInfoLayout;

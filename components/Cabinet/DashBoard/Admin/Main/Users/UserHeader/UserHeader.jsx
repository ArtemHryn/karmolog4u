import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import AddUserLink from './AddUserLink/AddUserLink';

import styles from './UserHeader.module.scss';

const UserHeader = ({ title = 'Користувачі', onlyDesktop }) => {
  if (onlyDesktop) {
    return (
      <div className={`${styles.wrapper} ${styles.wrapper_desktopOnly}`}>
        <TitleNoStyles styled={styles.title}>{title}</TitleNoStyles>
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <TitleNoStyles styled={styles.title}>{title}</TitleNoStyles>
      <div className={styles.link_wrapper}>
        <AddUserLink />
      </div>
    </div>
  );
};

export default UserHeader;

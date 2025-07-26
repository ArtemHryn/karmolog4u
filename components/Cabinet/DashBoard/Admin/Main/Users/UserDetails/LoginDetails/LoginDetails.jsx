import { generateColorFromInitials } from '@/helper/users/generateColorFromInitials';

import styles from './LoginDetails.module.scss';

const LoginDetails = ({ userDetails }) => {
  const { name, lastName, createdAt, lastLogin } = userDetails;
  const timeParams = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
    hour12: false,
  };
  return (
    <div className={styles.wrapper}>
      <p
        style={{ backgroundColor: generateColorFromInitials(`${name[0]}${lastName[0]}`) }}
        className={styles.initials}
      >
        {`${name[0]}${lastName[0]}`}
      </p>
      <ul className={styles.list}>
        <li className={styles.list_element}>
          <p className={`${styles.login_text} ${styles.login_text_name}`}>Дата реєстрації:</p>
          <p className={`${styles.login_text}`}>
            {new Date(createdAt).toLocaleDateString(undefined, timeParams)}
          </p>
        </li>
        <li className={styles.list_element}>
          <p className={`${styles.login_text} ${styles.login_text_name}`}>Останній вхід:</p>
          <p className={`${styles.login_text}`}>
            {lastLogin
              ? new Date(lastLogin).toLocaleDateString(undefined, timeParams)
              : 'Не входив'}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default LoginDetails;

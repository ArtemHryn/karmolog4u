import Link from 'next/link';
import styles from './OpenAccountProperties.module.scss';

const OpenAccountProperties = ({ rowData }) => {
  const { name, lastName } = rowData;

  const generateColorFromInitials = initials => {
    const colors = ['#fdd3a2', '#d7ff94', '#bae6ff', '#fff394', '#beffec'];
    let hash = 0;
    for (let i = 0; i < initials.length; i++) {
      hash = initials.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  };

  return (
    <div className={styles.wrapper}>
      <p
        className={styles.initials}
        style={{ backgroundColor: generateColorFromInitials(`${name[0]}${lastName[0]}`) }}
      >
        {`${name[0]}${lastName[0]}`}
      </p>
      <Link href={`/cabinet/dashboard/admin/users/${rowData.id}`} className={styles.user_link}>
        {name} {lastName}
      </Link>
    </div>
  );
};

export default OpenAccountProperties;

import BackButton from '../BackButton/BackButton';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <BackButton />
      </div>
      {children}
    </main>
  );
};

export default Layout;

import BackButton from '../BackButton/BackButton';
import styles from './Layout.module.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <BackButton />
      </div>
      {children}
      <ToastContainer autoClose={1000} />
    </main>
  );
};

export default Layout;

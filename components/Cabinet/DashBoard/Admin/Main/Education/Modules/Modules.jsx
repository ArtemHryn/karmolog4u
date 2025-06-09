import { ToastContainer } from 'react-toastify';
import Header from './Header/Header';
import NavEducationLinks from './NavEducationLinks/NavEducationLinks';
import ModulesTable from './ModulesTable/ModulesTable';
import CourseDetails from './CourseDetails/CourseDetails';

import styles from './Modules.module.scss';

import 'react-toastify/dist/ReactToastify.css';

const Modules = ({ course }) => {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.desktop_wrapper}>
        <NavEducationLinks navList={[{ name: 'Модулі', link: '#' }]} />
        <CourseDetails course={course} />
        <ModulesTable course={course} />
      </div>
      <ToastContainer autoClose={1000} />
    </main>
  );
};

export default Modules;

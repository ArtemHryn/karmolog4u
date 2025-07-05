'use client';
import { usePathname } from 'next/navigation';

import { ToastContainer } from 'react-toastify';
import NavEducationLinks from '../NavEducationLinks/NavEducationLinks';
import CourseDetails from '../CourseDetails/CourseDetails';
import Header from '../Header/Header';
import Form from './Form/Form';

import styles from './AddModule.module.scss';
import 'react-toastify/dist/ReactToastify.css';

const AddModule = ({ course }) => {
  const pathName = usePathname();
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.wrapper}>
        <NavEducationLinks
          navList={[
            { name: 'Модулі', link: `${pathName.split('/').slice(0, -1).join('/')}` },
            { name: 'Створення модулю', link: `#` },
          ]}
        />
        <CourseDetails course={course} />
        <Form />
      </div>
      <ToastContainer autoClose={1000} />
    </main>
  );
};

export default AddModule;

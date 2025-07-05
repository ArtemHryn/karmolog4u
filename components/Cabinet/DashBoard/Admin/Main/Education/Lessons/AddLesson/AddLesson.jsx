'use client';
import { usePathname } from 'next/navigation';

import { ToastContainer } from 'react-toastify';
import Header from '../../Modules/Header/Header';
import CourseDetails from '../../Modules/CourseDetails/CourseDetails';
import NavEducationLinks from '../../Modules/NavEducationLinks/NavEducationLinks';

import styles from './AddLesson.module.scss';
import Form from './Form/Form';

const AddLesson = ({ course }) => {
  const pathName = usePathname();

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.wrapper}>
        {' '}
        <NavEducationLinks
          navList={[
            { name: 'Уроки', link: `${pathName.split('/').slice(0, -1).join('/')}` },
            { name: 'Створення уроку', link: `#` },
          ]}
        />
        <CourseDetails course={course} />
        <Form />
      </div>
      <ToastContainer autoClose={1500} />
    </main>
  );
};

export default AddLesson;

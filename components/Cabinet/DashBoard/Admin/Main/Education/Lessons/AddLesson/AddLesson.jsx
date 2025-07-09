'use client';
import { usePathname } from 'next/navigation';

import { ToastContainer } from 'react-toastify';
import Header from '../../Modules/Header/Header';
import CourseDetails from '../../Modules/CourseDetails/CourseDetails';
import NavEducationLinks from '../../Modules/NavEducationLinks/NavEducationLinks';
import Form from './Form/Form';
import ModuleInfoInLessonEdit from '../ModuleInfoInLessonEdit/ModuleInfoInLessonEdit';

import styles from './AddLesson.module.scss';

const AddLesson = ({ course }) => {
  const pathName = usePathname();

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.wrapper}>
        {' '}
        <NavEducationLinks
          navList={[
            pathName.includes('modules')
              ? { name: 'Модулі', link: `${pathName.split('/').slice(0, -4).join('/')}` }
              : null,
            { name: 'Уроки', link: `${pathName.split('/').slice(0, -1).join('/')}` },
            { name: 'Створення уроку', link: `#` },
          ].filter(Boolean)}
        />
        <CourseDetails course={course} />
        <ModuleInfoInLessonEdit />
        <Form />
      </div>
      <ToastContainer autoClose={1500} />
    </main>
  );
};

export default AddLesson;

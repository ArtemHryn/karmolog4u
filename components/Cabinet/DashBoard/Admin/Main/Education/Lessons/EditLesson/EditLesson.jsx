'use client';
import { usePathname } from 'next/navigation';

import { ToastContainer } from 'react-toastify';
import Header from '../../Modules/Header/Header';
import CourseDetails from '../../Modules/CourseDetails/CourseDetails';
import NavEducationLinks from '../../Modules/NavEducationLinks/NavEducationLinks';
import Form from '../AddLesson/Form/Form';

import styles from './EditLesson.module.scss';

const EditLesson = ({ course, editLesson }) => {
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
              : {},
            { name: 'Уроки', link: `${pathName.split('/').slice(0, -2).join('/')}` },
            { name: 'Редагування уроку', link: `#` },
          ]}
        />
        <CourseDetails course={course} />
        <Form editLesson={editLesson} />
      </div>
      <ToastContainer autoClose={1500} />
    </main>
  );
};

export default EditLesson;

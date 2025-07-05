'use client';
import { useParams, usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import Header from '../Modules/Header/Header';
import NavEducationLinks from '../Modules/NavEducationLinks/NavEducationLinks';
import CourseDetails from '../Modules/CourseDetails/CourseDetails';
import LessonsTable from './LessonsTable/LessonsTable';

import styles from './Lessons.module.scss';
import 'react-toastify/dist/ReactToastify.css';

const Lessons = ({ course }) => {
  const params = useParams();
  const pathName = usePathname();

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.desktop_wrapper}>
        <NavEducationLinks
          navList={[
            ...(pathName.includes(params.module_id)
              ? [{ name: 'Модули', link: `${pathName.split('/').slice(0, -2).join('/')}` }]
              : []),
            { name: 'Уроки', link: '#' },
          ]}
        />
        <CourseDetails course={course} />
        <LessonsTable />
      </div>
      <ToastContainer autoClose={1000} />
    </main>
  );
};

export default Lessons;

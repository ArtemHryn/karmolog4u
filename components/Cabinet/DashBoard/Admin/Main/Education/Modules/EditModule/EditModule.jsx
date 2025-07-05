'use client';
import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';

import Header from '../Header/Header';
import NavEducationLinks from '../NavEducationLinks/NavEducationLinks';
import CourseDetails from '../CourseDetails/CourseDetails';

import styles from './EditModule.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import Form from '../AddModule/Form/Form';

const EditModule = ({ moduleInfo, courseInfo }) => {
  const pathName = usePathname();

  console.log(moduleInfo);

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.wrapper}>
        <NavEducationLinks
          navList={[
            { name: 'Модулі', link: `${pathName.split('/').slice(0, -2).join('/')}` },
            { name: 'Редагування модулю', link: `#` },
          ]}
        />
        <CourseDetails course={courseInfo} />
        <Form editModule={moduleInfo}/>
      </div>
      <ToastContainer autoClose={1000} />
    </main>
  );
};

export default EditModule;

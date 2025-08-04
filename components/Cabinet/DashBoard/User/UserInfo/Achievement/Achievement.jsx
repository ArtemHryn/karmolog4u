import Certificates from './Certificates/Certificates';
import CompletedCourses from './CompletedCourses/CompletedCourses';
import Title from './Title/Title';

import styles from './Achievement.module.scss';

const Achievement = () => {
  return (
    <>
      <Title title={'Мої досягнення'} />
      <div className={styles.wrapper}>
        <Certificates />
        <CompletedCourses />
      </div>
    </>
  );
};

export default Achievement;

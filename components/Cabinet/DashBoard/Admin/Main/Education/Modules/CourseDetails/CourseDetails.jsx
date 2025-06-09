import Image from 'next/image';

import MoreAboutCourse from './MoreAboutCourse/MoreAboutCourse';
import SecondList from './Lists/SecondList';
import FirstList from './Lists/FirstList';

import styles from './CourseDetails.module.scss';

const CourseDetails = ({ course }) => {
  return (
    <div className={styles.wrapper}>
      <Image
        width={92}
        height={88}
        src={course.cover}
        alt={course.name}
        className={styles.img}
        priority
      />
      <MoreAboutCourse course={course} />
      <FirstList course={course} />
      <SecondList course={course} />
    </div>
  );
};

export default CourseDetails;

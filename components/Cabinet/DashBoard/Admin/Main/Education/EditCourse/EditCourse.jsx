import AddCourseForm from '../AddCourse/AddCourseForm/AddCourseForm';
import AddCourseHeader from '../AddCourse/AddCourseHeader/AddCourseHeader';
import styles from './EditCourse.module.scss';

const EditCourse = ({ course }) => {
  return (
    <main className={styles.main}>
      <AddCourseHeader place={'Редагування  курсу'} />
      <AddCourseForm place={'Редагування  курсу'} course={course} />
    </main>
  );
};

export default EditCourse;

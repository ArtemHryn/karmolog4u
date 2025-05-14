import styles from './AddCourse.module.scss';
import AddCourseForm from './AddCourseForm/AddCourseForm';
import AddCourseHeader from './AddCourseHeader/AddCourseHeader';

const AddCourse = () => {
  return (
    <main className={styles.main}>
      <AddCourseHeader />
      <AddCourseForm />
    </main>
  );
};

export default AddCourse;

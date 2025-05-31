import styles from './AddCourse.module.scss';
import AddCourseForm from './AddCourseForm/AddCourseForm';
import AddCourseHeader from './AddCourseHeader/AddCourseHeader';

const AddCourse = () => {
  return (
    <main className={styles.main}>
      <AddCourseHeader place={'Створення  курсу'} />
      <AddCourseForm place={'Створення  курсу'} />
    </main>
  );
};

export default AddCourse;

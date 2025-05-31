import Actions from '../AddCourseHeader/Actions';

import styles from './AddCourseForm.module.scss';
import Form from './Form/Form';

const AddCourseForm = ({ place, course }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.actions_wrapper}>
        <Actions place={place} />
      </div>
      <Form editCourse={course} />
    </div>
  );
};

export default AddCourseForm;

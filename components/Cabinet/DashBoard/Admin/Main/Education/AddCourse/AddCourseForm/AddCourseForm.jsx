import Actions from '../AddCourseHeader/Actions';

import styles from './AddCourseForm.module.scss';
import Form from './Form/Form';

const AddCourseForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.actions_wrapper}>
        <Actions />
      </div>
      <Form />
    </div>
  );
};

export default AddCourseForm;

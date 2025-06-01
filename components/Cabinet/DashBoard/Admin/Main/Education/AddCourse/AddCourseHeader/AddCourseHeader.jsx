import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import Actions from './Actions';

import styles from './AddCourseHeader.module.scss';

const AddCourseHeader = ({ place }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.actions_wrapper}>
        <Actions place={place} />
      </div>
      <TitleNoStyles styled={styles.title}>Навчання</TitleNoStyles>
    </div>
  );
};

export default AddCourseHeader;

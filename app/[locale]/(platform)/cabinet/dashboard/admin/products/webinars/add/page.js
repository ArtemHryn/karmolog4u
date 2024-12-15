import FormHead from '@components/Cabinet/DashBoard/Admin/FormHead/FormHead';

import styles from './add_meditation_page.module.scss';
import AddWebinar from '@components/Cabinet/DashBoard/Admin/Main/Products/Webinars/AddWebinar/AddWebinar';

const AddMeditationPage = () => {
  return (
    <div className={styles.wrapper}>
      <FormHead title={'Створити публікацію'} />
      <AddWebinar />
    </div>
  );
};

export default AddMeditationPage;

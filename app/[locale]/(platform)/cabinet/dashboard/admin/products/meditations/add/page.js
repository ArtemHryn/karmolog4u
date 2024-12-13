import FormHead from '@components/Cabinet/DashBoard/Admin/FormHead/FormHead';
import MeditationForm from '@components/Cabinet/DashBoard/Admin/Main/Products/Meditations/AddMeditation/AddMeditation';

import styles from './add_meditation_page.module.scss'

const AddMeditationPage = () => {
  return (
    <div className={styles.wrapper}>
      <FormHead title={'Створити публікацію'} />
      <MeditationForm />
    </div>
  );
};

export default AddMeditationPage;

import FormHead from '@/components/Cabinet/DashBoard/Admin/FormHead/FormHead';

import styles from './add_meditation_page.module.scss';
import AddGuideAndBooks from '@/components/Cabinet/DashBoard/Admin/Main/Products/GuideAndBooks/AddGuideAndBooks/AddGuideAndBooks';

const AddGuideAndBooksPage = () => {
  return (
    <div className={styles.wrapper}>
      <FormHead title={'Створити публікацію'} />
      <AddGuideAndBooks />
    </div>
  );
};

export default AddGuideAndBooksPage;

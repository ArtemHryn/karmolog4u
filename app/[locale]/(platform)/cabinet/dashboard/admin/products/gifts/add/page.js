import FormHead from '@/components/Cabinet/DashBoard/Admin/FormHead/FormHead';
import styles from './add_gifts_page.module.scss';
import AddGift from '@/components/Cabinet/DashBoard/Admin/Main/Products/Gifts/AddGift/AddGift';
const AddPage = () => {
  return (
    <div className={styles.wrapper}>
      <FormHead title={'Створити публікацію'} />
      <AddGift />
    </div>
  );
};

export default AddPage;

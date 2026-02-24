import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import AddProductButton from '../AddProductButton/AddProductButton';

import styles from './Title.module.scss';
import { unbounded_client } from '@/app/[locale]/clients-fonts';

const Title = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={`${styles.title} ${unbounded_client.className}`}>Авторські продукти</h1>
      <div className={styles.add_product_wrapper}>
        <AddProductButton />
      </div>
    </div>
  );
};

export default Title;

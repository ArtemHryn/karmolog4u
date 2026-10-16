import AddProductButton from '../AddProductButton/AddProductButton';

import styles from './Title.module.scss';
import { unbounded } from '@/app/[locale]/fonts';

const Title = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={`${styles.title} ${unbounded.className}`}>Авторські продукти</h1>
      <div className={styles.add_product_wrapper}>
        <AddProductButton />
      </div>
    </div>
  );
};

export default Title;

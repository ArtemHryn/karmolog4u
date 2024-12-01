import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import AddProductButton from '../AddProductButton/AddProductButton';

import styles from './Title.module.scss';

const Title = () => {
  return (
    <div className={styles.wrapper}>
      <TitleNoStyles styled={styles.title}>Авторські продукти</TitleNoStyles>
      <div className={styles.add_product_wrapper}>
        <AddProductButton />
      </div>
    </div>
  );
};

export default Title;

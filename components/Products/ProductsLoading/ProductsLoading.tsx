import { ProgressSpinner } from 'primereact/progressspinner';

import styles from './ProductsLoading.module.scss';

const ProductsLoading = () => {
  return (
    <div className={styles.products_loading_wrapper}>
      <ProgressSpinner style={{ width: '100%', height: '200px' }} />
    </div>
  );
};

export default ProductsLoading;

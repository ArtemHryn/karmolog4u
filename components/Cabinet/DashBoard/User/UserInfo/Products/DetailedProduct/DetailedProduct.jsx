import ProductInfo from './ProductInfo/ProductInfo';
import RecommendedProducts from './RecommendedProducts/RecommendedProducts';

import styles from './DetailedProduct.module.scss';
import { Suspense } from 'react';
import Loader from '../../../Loader/Loader';

const DetailedProduct = ({ product, token }) => {
  
  return (
    <div className={styles.wrapper}>
      <ProductInfo product={product} />
      <Suspense fallback={<Loader />}>
        <RecommendedProducts token={token} />
      </Suspense>
    </div>
  );
};

export default DetailedProduct;

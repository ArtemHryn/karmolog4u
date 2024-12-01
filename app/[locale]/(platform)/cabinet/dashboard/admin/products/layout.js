import Title from '@components/Cabinet/DashBoard/Admin/Main/Products/Title/Title';

import styles from './layout.module.scss';
import Navigation from '@components/Cabinet/DashBoard/Admin/Main/Products/Navigation/Navigation';

const ProductsLayout = ({ children }) => {
  return (
    <main className={styles.main}>
      <Title />
      <Navigation />
      {children}
    </main>
  );
};

export default ProductsLayout;

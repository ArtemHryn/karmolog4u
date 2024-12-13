'use client';

import { usePathname } from 'next/navigation';
import Title from '@components/Cabinet/DashBoard/Admin/Main/Products/Title/Title';

import styles from './layout.module.scss';
import Navigation from '@components/Cabinet/DashBoard/Admin/Main/Products/Navigation/Navigation';

const ProductsLayout = ({ children }) => {
  const pathname = usePathname();
  return (
    <main className={styles.main}>
      {!pathname.includes('/add') && !pathname.includes('/edit') && (
        <>
          <Title />
          {/* <Navigation /> */}
        </>
      )}

      {children}
    </main>
  );
};

export default ProductsLayout;

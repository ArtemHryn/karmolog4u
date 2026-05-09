import ProductsNavigation from '@/components/Products/ProductsNavigation/ProductsNavigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductsLayout = ({ children }) => {
  return (
    <main>
      <ProductsNavigation />
      {children}
      <ToastContainer />
    </main>
  );
};

export default ProductsLayout;

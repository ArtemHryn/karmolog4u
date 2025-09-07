import Title from '../Achievement/Title/Title';
import ProductsNav from './ProductsNav/ProductsNav';

const ProductsWrapper = ({ children }) => {
  return (
    <>
      <Title title="Продукти" />
      <ProductsNav />
      {children}
    </>
  );
};

export default ProductsWrapper;

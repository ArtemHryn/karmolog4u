import ProductsWrapper from '@/components/Cabinet/DashBoard/User/UserInfo/Products/Products';

const ProductsLayout = ({ children }) => {
  return (
    <>
      <ProductsWrapper>{children}</ProductsWrapper>
    </>
  );
};

export default ProductsLayout;

import ProductsNavigation from "@components/Products/ProductsNavigation/ProductsNavigation";


const ProductsLayout = ({ children, modal }) => {
  return (
    <main>
      <ProductsNavigation />
      {children}
      {modal}
    </main>
  );
};

export default ProductsLayout;

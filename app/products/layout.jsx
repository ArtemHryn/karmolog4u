import ProductsNavigation from "@components/Products/ProductsNavigation/ProductsNavigation";

const ProductsLayout = ({ children }) => {
  return (
    <main>
      <ProductsNavigation />
      {children}
    </main>
  );
};

export default ProductsLayout;

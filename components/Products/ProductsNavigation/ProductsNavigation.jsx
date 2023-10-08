import Container from "@components/Common/Container/Container";
import InternalNavTitle from "@components/Common/InternalNavTitle/InternalNavTitle";
import ProductsNavLinks from "./ProductsNavLinks/ProductsNavLinks";

const links = [{ href: "/meetings", name: "Медитації" }];

const ProductsNavigation = () => {
  return (
    <Container>
      <InternalNavTitle links={links} title={"АВТОРСЬКІ ПРОДУКТИ"} />
      <ProductsNavLinks />
    </Container>
  );
};

export default ProductsNavigation;

import Container from "@components/Common/Container/Container";
import InternalNavTitle from "@components/Common/InternalNavTitle/InternalNavTitle";
import ProductsNavLinks from "./ProductsNavLinks/ProductsNavLinks";

import styles from './ProductsNavLinks/ProductsNavLinks.module.scss'

const links = [{ href: "/meetings", name: "Медитації" }];

const ProductsNavigation = () => {
  return (
    <Container styledSection={styles.section}>
      <InternalNavTitle links={links} title={"АВТОРСЬКІ ПРОДУКТИ"} />
      <ProductsNavLinks />
    </Container>
  );
};

export default ProductsNavigation;

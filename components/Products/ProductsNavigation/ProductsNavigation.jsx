"use client";

import {
  useParams,
  useSelectedLayoutSegment,
  usePathname,
} from "next/navigation";
import Container from "@components/Common/Container/Container";
import InternalNavTitle from "@components/Common/InternalNavTitle/InternalNavTitle";
import ProductsNavLinks from "./ProductsNavLinks/ProductsNavLinks";

import styles from "./ProductsNavLinks/ProductsNavLinks.module.scss";
import { useEffect } from "react";

const linksList = [
  { name: "Медитації", href: "meditations" },
  { name: "Вебінари", href: "courses" },
  { name: "Гайди та книги", href: "guides-and-books" },
  { name: "Подарунки Студії", href: "gifts" },
];

const ProductsNavigation = () => {
  const params = useParams();
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();

  // useEffect(() => {
  //   (async function () {
  //     const response = await fetch("/api/nova-poshta");
  //     const data = await response.json();
  //     console.log(data.data);
  //   })();
  // });

  if (params.id || pathname.includes("health-map-details")) return null;
  const links = [linksList.find((el) => el.href === segment)];
  return (
    <Container styledSection={styles.section}>
      <InternalNavTitle links={links} title={"АВТОРСЬКІ ПРОДУКТИ"} />
      <ProductsNavLinks links={linksList} />
    </Container>
  );
};

export default ProductsNavigation;

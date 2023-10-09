"use client";

import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import NavLink from "./NavLink";

import styles from "./ProductsNavLinks.module.scss";
import "swiper/css";

const links = [
  { name: "Медитації", href: "meditations" },
  { name: "Навчальні курси", href: "courses" },
  { name: "Гайди та книги", href: "guides-and-books" },
  { name: "Подарунки Студії", href: "gifts" },
];

const ProductsNavLinks = () => {
  const fullRoute = usePathname().split("/");
  const currentRoute = fullRoute[fullRoute.length - 1];

  return (
    <Swiper
      className={styles.swiper}
      centeredSlides={true}
      breakpoints={{
        360: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
          centeredSlides: false,
        },
      }}
    >
      {links.map((link, index) => (
        <SwiperSlide key={link.href}>
          <NavLink link={link} index={index} currentRoute={currentRoute} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsNavLinks;

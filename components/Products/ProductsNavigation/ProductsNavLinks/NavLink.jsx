import { useRouter } from "next/navigation";
import { useSwiper } from "swiper/react";
import { useEffect } from "react";

import styles from "./ProductsNavLinks.module.scss";
import Link from "next/link";

const NavLink = ({ link, index, currentRoute }) => {
  const swiper = useSwiper();
  useEffect(() => {
    currentRoute === link.href && swiper.slideTo(index, 300);
  }, [currentRoute, index, link.href, swiper]);
  return (
    <Link
      href={link.href}
      className={`${styles.link} ${
        currentRoute === link.href && styles.link_active
      }`}
    >
      {link.name}
    </Link>
  );
};

export default NavLink;

import { useEffect } from "react";
import Link from "next/link";
import { useSwiper } from "swiper/react";
import { useLocale } from "next-intl";

import styles from "./ProductsNavLinks.module.scss";

const NavLink = ({ link, index, currentRoute }) => {
  const locale = useLocale()
  const swiper = useSwiper();
  useEffect(() => {
    currentRoute === link.href && swiper.slideTo(index, 300);
  }, [currentRoute, index, link.href, swiper]);
  return (
    <Link
      href={link.href}
      className={`${styles.link} ${currentRoute === link.href && styles.link_active}`}
    >
      {typeof link.name === 'string' ? link.name : link.name[locale]}
    </Link>
  );
};

export default NavLink;

import { useRouter } from "next/navigation";
import { useSwiper } from "swiper/react";
import { useEffect } from "react";

import styles from "./ProductsNavLinks.module.scss";

const NavLink = ({ link, index, currentRoute }) => {
  const swiper = useSwiper();
  const router = useRouter();
  useEffect(() => {
    currentRoute === link.href && swiper.slideTo(index, 300);
  });
  return (
    <button
      href={link.href}
      className={`${styles.link} ${
        currentRoute === link.href && styles.link_active
      }`}
      onClick={() => {
        swiper.slideTo(index + 1, 300);
        router.push(link.href);
      }}
    >
      {link.name}
    </button>
  );
};

export default NavLink;

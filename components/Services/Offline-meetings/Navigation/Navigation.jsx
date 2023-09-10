import Container from "@components/Common/Container/Container";
import HeroNav from "@components/Common/HeroNav/HeroNav";
import NavLinks from "./NavLinks";

import styles from "./Navigation.module.scss";
import { unbounded } from "@app/layout";

const links = [{ href: "/offline-meetings", name: "Офлайн зустрічі" }];

const Navigation = () => {
  return (
    <Container>
      <HeroNav linkNames={links} />
      <h1 className={`${styles.title} ${unbounded.className}`}>
        ОФЛАЙН-ЗУСТРІЧІ
      </h1>
      <p className={`${styles.studio} ${unbounded.className}`}>
        <span className={styles.studio_line} /> Студія трансформації Сергія
        Скляренка <span className={styles.studio_line} />
      </p>
      <NavLinks />
    </Container>
  );
};

export default Navigation;

import Container from "@components/Common/Container/Container";
import HeroNav from "@components/Common/HeroNav/HeroNav";
import Title from "@components/Common/Title/Title";

import styles from "./Hero.module.scss";

const Hero = ({ links, title }) => {
  return (
    <Container styledSection={styles.section}>
      <HeroNav linkNames={links} />
      <Title styled={styles.title}>{title}</Title>
    </Container>
  );
};

export default Hero;

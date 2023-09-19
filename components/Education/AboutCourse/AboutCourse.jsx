import Image from "next/image";
import Container from "@components/Common/Container/Container";
import Title from "@components/Common/Title/Title";

import styles from "./AboutCourse.module.scss";
import TextContainer from "./TextContainer";

const AboutCourse = ({ img, text = [] }) => {
  return (
    <Container styled={styles.container}>
      <Title styled={styles.title}>Про курс</Title>
      <picture className={styles.img}>
        {img.imgDesk && (
          <source srcSet={img.imgDesk} media="(min-width: 1280px)" />
        )}
        <Image
          src={img.img}
          alt={img.alt}
          width={736}
          height={500}
          className={styles.img}
        />
      </picture>
      <TextContainer text={text} />
    </Container>
  );
};

export default AboutCourse;

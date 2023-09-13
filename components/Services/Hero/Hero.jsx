import Image from "next/image";
import Container from "@components/Common/Container/Container";
import HeroNav from "@components/Common/HeroNav/HeroNav";

import styles from "./Hero.module.scss";
import { open_Sans, unbounded } from "@app/layout";
import Link from "next/link";

const Hero = ({ linkNames = [], title, img }) => {
  return (
    <Container>
      <HeroNav linkNames={linkNames} />
      <div className={styles.box}>
        <div className={styles.text_wrapper}>
          <h1 className={`${styles.title} ${unbounded.className}`}>{title}</h1>
          <Link
            href={`${linkNames[0].href}/dialog`}
            className={`${styles.button} ${open_Sans.className}`}
          >
            Записатися
          </Link>
        </div>
        <Image
          src={img.img}
          alt={img.alt}
          width={1280}
          height={920}
          className={styles.img}
        />
      </div>
    </Container>
  );
};

export default Hero;

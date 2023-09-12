import Image from "next/image";
import Container from "@components/Common/Container/Container";

import styles from "./AboutRetreat.module.scss";
import { unbounded } from "@app/layout";

const AboutRetreat = () => {
  return (
    <Container styled={styles.container}>
      <h1 className={`${styles.title} ${unbounded.className}`}>
        Що на вас чекає?
      </h1>
      <picture className={styles.img}>
        <source
          srcSet="/assets/images/about_retreat_desc.webp"
          media="(min-width: 1280px)"
        />
        <Image
          src={"/assets/images/about_retreat.webp"}
          width={736}
          height={440}
          alt="практики для отримання сили стародавніх предків, позбавлення від
              страхів, отримання матеріального достатку"
        />
      </picture>
      <div className={styles.text_container}>
        <p className={styles.text}>
          *Тема та програма ретриту кожного разу різні.
        </p>
        <ul className={styles.list}>
          <li>
            <p className={styles.text}>
              практики для отримання сили стародавніх предків, позбавлення від
              страхів, отримання матеріального достатку;
            </p>
          </li>
          <li>
            <p className={styles.text}>
              окремий день, присвячений ритуалу в місячне затемнення;
            </p>
          </li>
          <li>
            <p className={styles.text}>розкриття тотемної тварини;</p>
          </li>
          <li>
            <p>досвід холотропного дихання;</p>
          </li>
          <li>
            <p className={styles.text}>
              звукотерапію чашами Тибету, гонгом і бубном.
            </p>
          </li>
        </ul>
        <p className={styles.text}>
          У результаті ви здійсните глибинну трансформацію трьох рівнів
          свідомості: душі, розуму та тіла через повне занурення у відібрані
          практики під керівництвом Сергія Скляренка
        </p>
      </div>
    </Container>
  );
};

export default AboutRetreat;

import Image from "next/image";
import Container from "@components/Common/Container/Container";
import styles from "./Research.module.scss";
import { unbounded } from "@app/layout";
import ResearchSlider from "./ResearchSlider/ResearchSlider";



const Research = () => {
  return (
    <Container>
      <h1 className={`${styles.header} ${unbounded.className}`}>
        Наукова діяльність
      </h1>
      <div className={styles.content_container}>
        <ul className={styles.description_container}>
          <li>
            <p className={styles.description}>
              Я той, хто намагається своїми знаннями покращити та удосконалити
              світ. Я постіний учень та вчитель. Навчання для мене ніколи не
              закінчується. Я бажаю ввести в науку метод “Матриця долі”, щоб
              люди мали можливість вивчати цей метод та змінювати своє житті на
              краще.
            </p>
          </li>
          <li>
            <p className={styles.description}>
              Ви можете ознайомитись з моїми роботами, які відкриють наукову
              сторону даного методу.
            </p>
          </li>
        </ul>
        <picture>
          <source
            srcSet="/assets/images/research-sergiy-tab.webp"
            media="(min-width: 768px)"
          />
          <Image
            src="/assets/images/research_sergiy_mob.webp"
            priority={false}
            width={328}
            height={207}
            alt="Сергій Скляренко"
            className={styles.img}
          />
        </picture>
      </div>
      <ResearchSlider />
    </Container>
  );
};

export default Research;

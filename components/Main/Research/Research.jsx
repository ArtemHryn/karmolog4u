import Image from 'next/image';
import Container from '@components/Common/Container/Container';
import styles from './Research.module.scss';
import ResearchSlider from './ResearchSlider/ResearchSlider';
import { unbounded } from '@app/[locale]/layout';

const Research = () => {
  return (
    <Container styled={styles.container} styledSection={styles.section}>
      <div className={styles.spot} />
      <h1 className={`${styles.header} ${unbounded.className}`}>Наукова діяльність</h1>
      <div className={styles.content_container}>
        <ul className={styles.description_container}>
          <li>
            <p className={styles.description}>
              Я вчитель і я учень – ці ролі завжди йдуть поруч, адже не можливо прагнути розповісти
              світові про можливість змін і не продовжувати самовдосконалюватись. Світ мінливий,
              саме тому завжди треба встигати за змінами та відчувати нові енергії.
            </p>
          </li>
          <li>
            <p className={styles.description}>
              Метод “Матриця долі”, за моїм задумом, має не тільки бути науковим надбанням, а й
              таким чином, стати доступнішим для більшої кількості освічених людей, які зможуть
              змінити власний та навколишній світ на краще. З науковим аспектом даного методу можна
              ознайомитись у моїх роботах.
            </p>
          </li>
        </ul>
        <picture>
          <Image
            src="/assets/images/research_sergiy.webp"
            priority={false}
            width={328}
            height={207}
            alt="Сергій Скляренко"
            className={styles.img}
          />
        </picture>
        <Image
          src="/assets/images/research_arrow.svg"
          width={135}
          height={38}
          alt="arrow"
          className={styles.arrow}
        />
      </div>
      <ResearchSlider />
    </Container>
  );
};

export default Research;

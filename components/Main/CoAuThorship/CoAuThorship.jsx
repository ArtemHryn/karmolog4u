import Container from '@components/Common/Container/Container';
import Books from './Books/Books';
import { unbounded } from '@app/layout';

import styles from './CoAuThorship.module.scss';
import BooksTab from './Books/BooksTab';
import BooksArrow from '@components/Common/Icons/BooksArrow';

const CoAuThorship = () => {
  return (
    <Container styled={styles.container} styledSection={styles.section}>
      <div className={styles.spot} />
      <div>
        <h1 className={`${styles.header} ${unbounded.className}`}>Мої книжки</h1>
        <div className={styles.description_wrapper}>
          <p className={styles.description}>
            Завдяки моєму авторству та співавторству у різних публікаціях я маю змогу доносити
            важливу інформацію більшій кількості людей, а ви — отримати її вже сьогодні.
          </p>
          <p className={styles.description}>
            Моїм доробком наразі є авторська книжка “Філософія 22 енергій світотворення”, а також
            співавторство у декількох книжках-тренінгах, які вже допомагають початківцям та
            професіоналам у роботі з клієнтами.
          </p>
          <p className={styles.description}>
            Ну і звісно я продовжую працювати, то ж зовсім скоро розповім вам про новинки.
          </p>
        </div>
        <BooksArrow styled={styles.arrow} />
      </div>
      <Books />
      <BooksTab />
    </Container>
  );
};

export default CoAuThorship;

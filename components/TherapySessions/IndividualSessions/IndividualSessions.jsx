import Container from '@components/Common/Container/Container';
import Image from 'next/image';
import Title from '@components/Common/Title/Title';

import styles from './IndividualSessions.module.scss';

function IndividualSessions() {
  return (
    <Container styledSection={styles.section}>
      <Title variant="h2" styled={`${styles.title}`}>
        Про індивідуальні сесії
      </Title>
      <div className={styles.wrap}>
        <article className={styles.article}>
          <p>
            Назва мого запатентованого нового виду психотерапії – “Кармотерапія” походить від слова
            “карма”, яке символізує причину та наслідок.
          </p>
          <p>
            Цей метод містить елементи теорій видатного Р. Ассаджіолі, зокрема, роботу з
            субособистостями та адаптовані методи ототожнення й розтотожнення. Також
            використовуються авторські медитаційні техніки, які досліджені у моїх наукових роботах.
          </p>
          <p>
            В основі “Кармотерапії” є комплексне тестування та аналіз за 22-ма субособистостями, які
            відображають різні аспекти свідомості людини. Такі методики допомагають у розблокуванні
            ваших внутрішніх потенціалів, щоб ви змогли позбутися страхів, які заважають вам вийти
            зі своєї зони комфорту та якісно покращити життя.
          </p>
          <p>
            Кожна сесія – це індивідуальний підхід, який допоможе у формуванні вашої “нової
            реальності”.
          </p>
          <p>
            І головне, що, навіть за межами сесії ви не самі - я та консультанти Студії, завжди
            поруч.
          </p>
        </article>
        <picture className={styles.image}>
          <source
            srcSet={'/assets/images/therapySessions/IndividualSessions-desk.webp'}
            media="(min-width: 1280px)"
          />
          <Image
            src={'/assets/images/therapySessions/IndividualSessions.webp'}
            alt="ub"
            width={519}
            height={468}
            className={styles.image}
          />
        </picture>
      </div>
    </Container>
  );
}

export default IndividualSessions;

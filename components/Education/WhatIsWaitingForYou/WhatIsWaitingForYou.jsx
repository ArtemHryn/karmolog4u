import Container from "@components/Common/Container/Container";
import Title from "@components/Common/Title/Title";
import Card from "./Card";

import styles from "./WhatIsWaitingForYou.module.scss";

const card1 = [
  { column1: "УРОК 0.", column2: "Знайомство з методом" },
  { column1: "УРОК 1.", column2: "8 зовнішніх карм" },
  { column1: "УРОК 2.", column2: "4 внутрішні карми у квадраті особистості" },
  { column1: "УРОК 3.", column2: "4 внутрішні карми у квадраті роду" },
];
const card2 = [
  { column1: "УРОК 4.", column2: "Любовний та грошовий канали" },
  { column1: "УРОК 5.", column2: "Карта життя" },
  { column1: "УРОК 6.", column2: "Карта здоров’я" },
  { column1: "УРОК 7.", column2: "Карта року" },
];
const card3 = [
  { column1: "УРОК 8.", column2: "Бінуарні ритми" },
  { column1: "УРОК 9.", column2: "Матриця сумісності" },
  { column1: "Бібліотека", column2: "Трактування 22 кодів долі" },
  { column1: "УРОК 10.", column2: "План індивідуальної трансформації" },
];

const WhatIsWaitingForYou = () => {
  return (
    <Container>
      <Title styled={styles.title}>Що на вас чекає?</Title>
      <div className={styles.cards_wrapper}>
        <Card list={card1} />
        <Card list={card2} />
        <Card list={card3} />
      </div>
    </Container>
  );
};

export default WhatIsWaitingForYou;

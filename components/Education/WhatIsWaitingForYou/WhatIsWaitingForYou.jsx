import Container from '@components/Common/Container/Container';
import Title from '@components/Common/Title/Title';
import Card from './Card';

import styles from './WhatIsWaitingForYou.module.scss';

const WhatIsWaitingForYou = ({ cards, column1Style }) => {
  return (
    <Container styled={styles.container} styledSection={styles.section}>
      <div className={styles.spot} />
      <div className={styles.spot2} />
      <Title styled={styles.title}>Що на вас чекає?</Title>
      <div className={`${styles.cards_wrapper} ${cards.warning ? styles.warning_margin : ''}`}>
        <Card list={cards.card1} column1Style={column1Style} />
        <Card list={cards.card2} column1Style={column1Style} />
        <Card list={cards.card3} column1Style={column1Style} />
      </div>
      {cards.warning && (
        <div>
          {cards.warning.map((el, index) => (
            <p key={index} className={styles.warning}>
              {el}
            </p>
          ))}
        </div>
      )}
    </Container>
  );
};

export default WhatIsWaitingForYou;

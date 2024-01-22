import Title from '@components/Common/Title/Title';

import styles from './MatrixGraph.module.scss';

const InnerSq = ({ matrix }) => {
  const { innerTop, innerLeft, innerRight, innerBottom, balance, love, money } = matrix;
  return (
    <>
      <Title variant="span" styled={`${styles.inner_key} ${styles.life_innerTop}`}>
        {innerTop}
      </Title>
      <Title variant="span" styled={`${styles.inner_key} ${styles.life_innerLeft}`}>
        {innerLeft}
      </Title>
      <Title variant="span" styled={`${styles.inner_key} ${styles.life_innerRight}`}>
        {innerRight}
      </Title>
      <Title variant="span" styled={`${styles.inner_key} ${styles.life_innerBottom}`}>
        {innerBottom}
      </Title>
      <Title variant="span" styled={`${styles.inner_key} ${styles.life_balance}`}>
        {balance}
      </Title>
      <Title variant="span" styled={`${styles.inner_key} ${styles.life_love}`}>
        {love}
      </Title>
      <Title variant="span" styled={`${styles.inner_key} ${styles.life_money}`}>
        {money}
      </Title>
    </>
  );
};

export default InnerSq;

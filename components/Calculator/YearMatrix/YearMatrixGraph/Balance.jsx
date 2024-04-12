import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import styles from './YearMatrixGraph.module.scss';

const Balance = ({ matrix }) => {
  if (!matrix) return null;
  const { balance, love, money } = matrix;
  return (
    <>
      <TitleNoStyles variant="span" styled={`${styles.inner_key} ${styles.life_balance}`}>
        {balance}
      </TitleNoStyles>
      <TitleNoStyles variant="span" styled={`${styles.inner_key} ${styles.life_love}`}>
        {love}
      </TitleNoStyles>
      <TitleNoStyles variant="span" styled={`${styles.inner_key} ${styles.life_money}`}>
        {money}
      </TitleNoStyles>
    </>
  );
};

export default Balance;

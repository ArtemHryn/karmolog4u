import Title from '@/components/Common/Title/Title';

import styles from './Sides.module.scss';

const TopTalismanMatrix = ({ matrix, main }) => {
  const { topLeft1, topRight1, month } = matrix;
  return (
    <>
      <Title
        variant="span"
        styled={`${styles.key} ${main ? styles.main_topLeft1 : styles.key_topLeft1}`}
      >
        {topLeft1}
      </Title>
      <Title variant="span" styled={`${styles.key} ${main ? styles.main_month : styles.key_month}`}>
        {month}
      </Title>
      <Title
        variant="span"
        styled={`${styles.key} ${main ? styles.main_topRight1 : styles.key_topRight1}`}
      >
        {topRight1}
      </Title>
    </>
  );
};

export default TopTalismanMatrix;

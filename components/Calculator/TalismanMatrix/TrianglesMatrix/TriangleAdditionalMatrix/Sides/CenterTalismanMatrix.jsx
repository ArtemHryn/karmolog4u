import Title from '@/components/Common/Title/Title';

import styles from './Sides.module.scss';

const CenterTalismanMatrix = ({ matrix, main }) => {
  const { day, center, year } = matrix;
  return (
    <>
      <Title variant="span" styled={`${styles.key} ${main ? styles.main_day : styles.key_day}`}>
        {day}
      </Title>
      <Title variant="span" styled={`${styles.center} ${main ? styles.center_main : ''}`}>
        {center}
      </Title>
      <Title variant="span" styled={`${styles.key} ${main ? styles.main_year : styles.key_year}`}>
        {year}
      </Title>
    </>
  );
};

export default CenterTalismanMatrix;

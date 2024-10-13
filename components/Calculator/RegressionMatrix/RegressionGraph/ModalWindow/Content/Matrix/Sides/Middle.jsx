import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

import styles from './Sides.module.scss'

const Middle = ({ matrix }) => {
  const { day, center, year } = matrix;
  return (
    <>
      <TitleNoStyles variant="span" styled={`${styles.out_key} ${styles.out_day}`}>
        {day}
      </TitleNoStyles>
      <TitleNoStyles variant="span" styled={styles.center}>
        {center}
      </TitleNoStyles>
      <TitleNoStyles variant="span" styled={`${styles.out_key} ${styles.out_year}`}>
        {year}
      </TitleNoStyles>
    </>
  );
};

export default Middle;

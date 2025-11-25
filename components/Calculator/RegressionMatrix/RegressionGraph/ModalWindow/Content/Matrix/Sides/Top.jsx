import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import styles from './Sides.module.scss';

const Top = ({ matrix }) => {
  const { topLeft1, month, topRight1 } = matrix;
  return (
    <>
      <TitleNoStyles variant="span" styled={`${styles.out_key} ${styles.out_topLeft1}`}>
        {topLeft1}
      </TitleNoStyles>
      <TitleNoStyles variant="span" styled={`${styles.out_key} ${styles.out_month}`}>
        {month}
      </TitleNoStyles>
      <TitleNoStyles variant="span" styled={`${styles.out_key} ${styles.out_topRight1}`}>
        {topRight1}
      </TitleNoStyles>
    </>
  );
};

export default Top;

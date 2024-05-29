import Title from '@components/Common/Title/Title';

import styles from './Sides.module.scss';

const SixteenLawsTop = ({ matrix, hideAdditionalKeys, hideInnerAdditionalKeys }) => {
  const { topLeft1, month, topRight1, topLeft2, top2, topRight2, topLeft3, top3, topRight3 } =
    matrix;
  return (
    <>
      <Title variant="span" styled={`${styles.out_key} ${styles.out_topLeft1}`}>
        {topLeft1}
      </Title>
      <Title variant="span" styled={`${styles.out_key} ${styles.out_month}`}>
        {month}
      </Title>
      {!hideInnerAdditionalKeys && (
        <>
          <Title variant="span" styled={`${styles.middle_key} ${styles.middle_top2}`}>
            {top2}
          </Title>
          <Title variant="span" styled={`${styles.inner_key} ${styles.inner_top3}`}>
            {top3}
          </Title>
        </>
      )}

      <Title variant="span" styled={`${styles.out_key} ${styles.out_topRight1}`}>
        {topRight1}
      </Title>
      {!hideAdditionalKeys && (
        <>
          <Title variant="span" styled={`${styles.middle_key} ${styles.middle_topLeft2}`}>
            {topLeft2}
          </Title>
          <Title variant="span" styled={`${styles.middle_key} ${styles.middle_topRight2}`}>
            {topRight2}
          </Title>
          <Title variant="span" styled={`${styles.inner_key} ${styles.inner_topLeft3}`}>
            {topLeft3}
          </Title>
          <Title variant="span" styled={`${styles.inner_key} ${styles.inner_topRight3}`}>
            {topRight3}
          </Title>
        </>
      )}
    </>
  );
};

export default SixteenLawsTop;

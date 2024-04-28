import Title from '@components/Common/Title/Title';

import styles from './Sides.module.scss'

const SixteenLawsBottom = ({ matrix, hideAdditionalKeys, hideInnerAdditionalKeys }) => {
  const {
    bottom1,
    bottomRight1,
    bottomLeft1,
    bottom3,
    bottom2,
    bottomLeft3,
    bottomLeft2,
    bottomRight3,
    bottomRight2,
  } = matrix;
  return (
    <>
      <Title variant="span" styled={`${styles.out_key} ${styles.out_bottomRight1}`}>
        {bottomRight1}
      </Title>
      <Title variant="span" styled={`${styles.out_key} ${styles.out_bottom1}`}>
        {bottom1}
      </Title>
      <Title variant="span" styled={`${styles.out_key} ${styles.out_bottomLeft1}`}>
        {bottomLeft1}
      </Title>
      {!hideInnerAdditionalKeys && (
        <>
          <Title variant="span" styled={`${styles.middle_key} ${styles.middle_bottom2}`}>
            {bottom2}
          </Title>
          <Title variant="span" styled={`${styles.inner_key} ${styles.inner_bottom3}`}>
            {bottom3}
          </Title>
        </>
      )}

      {!hideAdditionalKeys && (
        <>
          <Title variant="span" styled={`${styles.middle_key} ${styles.middle_bottomRight2}`}>
            {bottomRight2}
          </Title>
          <Title variant="span" styled={`${styles.middle_key} ${styles.middle_bottomLeft2}`}>
            {bottomLeft2}
          </Title>
          <Title variant="span" styled={`${styles.inner_key} ${styles.inner_bottomRight3}`}>
            {bottomRight3}
          </Title>
          <Title variant="span" styled={`${styles.inner_key} ${styles.inner_bottomLeft3}`}>
            {bottomLeft3}
          </Title>
        </>
      )}
    </>
  );
};

export default SixteenLawsBottom;

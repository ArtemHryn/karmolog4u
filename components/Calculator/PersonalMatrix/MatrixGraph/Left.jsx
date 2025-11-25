import Title from '@/components/Common/Title/Title';

import styles from './MatrixGraph.module.scss';

const Left = ({ matrix, hideAdditionalKeys, showThirdKey }) => {
  const { day, left2, left3 } = matrix;
  return (
    <>
      <Title variant="span" styled={`${styles.out_key} ${styles.out_day}`}>
        {day}
      </Title>
      {showThirdKey && (
        <Title variant="span" styled={`${styles.inner_key} ${styles.inner_left3}`}>
          {left3}
        </Title>
      )}
      {!hideAdditionalKeys && (
        <>
          <Title variant="span" styled={`${styles.middle_key} ${styles.middle_left2}`}>
            {left2}
          </Title>
          <Title variant="span" styled={`${styles.inner_key} ${styles.inner_left3}`}>
            {left3}
          </Title>
        </>
      )}
    </>
  );
};

export default Left;

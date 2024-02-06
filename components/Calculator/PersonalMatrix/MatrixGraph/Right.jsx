import Title from '@components/Common/Title/Title';

import styles from './MatrixGraph.module.scss';

const Right = ({ matrix, hideAdditionalKeys }) => {
  const { year, right2, right3 } = matrix;
  return (
    <>
      <Title variant="span" styled={`${styles.out_key} ${styles.out_year}`}>
        {year}
      </Title>
      {!hideAdditionalKeys && (
        <>
          <Title variant="span" styled={`${styles.middle_key} ${styles.middle_right2}`}>
            {right2}
          </Title>
          <Title variant="span" styled={`${styles.inner_key} ${styles.inner_right3}`}>
            {right3}
          </Title>
        </>
      )}
    </>
  );
};

export default Right;

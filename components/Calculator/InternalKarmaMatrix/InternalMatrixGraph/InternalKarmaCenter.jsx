import Title from '@components/Common/Title/Title';

import styles from './InternalMatrixGraph.module.scss';

const InternalKarmaCenter = ({ matrix }) => {
  const { center, center2 } = matrix;

  return (
    <>
      <Title variant="span" styled={`${styles.center} ${styles.center_main}`}>
        {center}
      </Title>
      <Title variant="span" styled={`${styles.center} ${styles.center_additional}`}>
        {center2}
      </Title>
    </>
  );
};

export default InternalKarmaCenter;

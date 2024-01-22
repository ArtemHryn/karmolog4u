import Title from "@components/Common/Title/Title";

import styles from './MatrixGraph.module.scss'

const Center = ({ matrix }) => {
  const { center, center2 } = matrix;
  return (
    <>
      <Title variant="span" styled={styles.center}>
        {center}
      </Title>
      <Title variant="span" styled={styles.center2}>
        {center2}
      </Title>
    </>
  );
};

export default Center;

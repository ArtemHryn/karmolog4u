import Title from '@/components/Common/Title/Title';

import styles from './Sides.module.scss';

const BottomTalismanMatrix = ({ matrix, main }) => {
  const { bottomLeft1, bottom1, bottomRight1 } = matrix;
  return (
    <>
      <Title
        variant="span"
        styled={`${styles.key} ${main ? styles.main_bottomRight1 : styles.key_bottomRight1}`}
      >
        {bottomRight1}
      </Title>
      <Title
        variant="span"
        styled={`${styles.key} ${main ? styles.main_bottom1 : styles.key_bottom1}`}
      >
        {bottom1}
      </Title>
      <Title
        variant="span"
        styled={`${styles.key} ${main ? styles.main_bottomLeft1 : styles.key_bottomLeft1}`}
      >
        {bottomLeft1}
      </Title>
    </>
  );
};

export default BottomTalismanMatrix;

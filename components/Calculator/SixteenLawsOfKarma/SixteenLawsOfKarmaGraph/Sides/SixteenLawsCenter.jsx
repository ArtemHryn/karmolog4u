import Title from '@/components/Common/Title/Title';

import styles from './Sides.module.scss';

const SixteenLawsCenter = ({ matrix, hideCenter2 }) => {
  const { center, center2 } = matrix;
  return (
    <>
      <Title variant="span" styled={styles.center}>
        {center}
      </Title>
      {!hideCenter2 && (
        <Title variant="span" styled={styles.center2}>
          {center2}
        </Title>
      )}
    </>
  );
};

export default SixteenLawsCenter;

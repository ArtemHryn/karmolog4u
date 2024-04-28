import styles from './Circles.module.scss';

const SixteenLawsCenter2 = ({ matrix }) => {
  if (!matrix) return null;
  const { center2 } = matrix;
  return (
    <>
      <p className={`${styles.circle_el} ${styles.center2}`}>{center2}</p>
    </>
  );
};

export default SixteenLawsCenter2;

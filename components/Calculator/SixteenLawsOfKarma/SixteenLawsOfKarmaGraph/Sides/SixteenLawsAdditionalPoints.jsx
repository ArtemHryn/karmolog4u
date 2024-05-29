import styles from './Sides.module.scss';

const SixteenLawsAdditionalPoints = ({ matrix }) => {
  if (!matrix) return null;
  const elements = Object.keys(matrix);
  return (
    <>
      {elements.map(el => (
        <p key={el} className={`${styles.addition_keys} ${styles[`addition_keys_${el}`]}`}>
          {matrix[el]}
        </p>
      ))}
    </>
  );
};

export default SixteenLawsAdditionalPoints;

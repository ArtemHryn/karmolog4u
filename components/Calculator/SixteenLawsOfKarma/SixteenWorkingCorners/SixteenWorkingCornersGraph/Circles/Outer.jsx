import styles from './Circles.module.scss';

const Outer = ({ matrix }) => {
  if (!matrix.outer) return null;
  const keys = Object.keys(matrix.outer);
  return (
    <>
      {keys.map(el => (
        <p key={el} className={`${styles.circle_el} ${styles[`circle_el_${el}`]}`}>
          {matrix.outer[el]}
        </p>
      ))}
    </>
  );
};

export default Outer;

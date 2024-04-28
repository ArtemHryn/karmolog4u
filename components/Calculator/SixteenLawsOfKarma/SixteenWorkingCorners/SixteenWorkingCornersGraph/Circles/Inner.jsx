import styles from './Circles.module.scss';

const Inner = ({ matrix }) => {
  if (!matrix.inner) return null;
  const keys = Object.keys(matrix.inner);
  return (
    <>
      {keys.map(el => (
        <p key={el} className={`${styles.circle_el_inner} ${styles[`circle_el_inner_${el}`]}`}>
          {matrix.inner[el]}
        </p>
      ))}
    </>
  );
};

export default Inner;

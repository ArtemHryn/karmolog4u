import Title from '@components/Common/Title/Title';

import styles from './CurrentPeriod.module.scss';

const CurrentPeriod = ({ period }) => {
  if (Object.keys(period).length === 0) return null;
  const keys = period.arcane.split('-');
  return (
    <div className={styles.wrapper}>
      <Title variant="h3" styled={styles.title}>
        Ключ поточного року
      </Title>
      <ul className={styles.keys_list}>
        {keys.map((el, index) => (
          <li key={index}>
            <p className={styles.key}>{el}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrentPeriod;

import Title from "../Title/Title";

import styles from './CalcDateTitle.module.scss'

const CalcDateTitle = ({ name, date }) => {
  return (
    <div className={styles.date_wrapper}>
      {name ? (
        <Title variant="p" styled={styles.date_title}>
          {name}
        </Title>
      ) : (
        <Title variant="p" styled={styles.date_title}>
          Дата народження:
        </Title>
      )}
      <Title variant="p" styled={styles.date}>
        {date}
      </Title>
    </div>
  );
};

export default CalcDateTitle;

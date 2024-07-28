import { useTranslations } from "next-intl";
import Title from "../Title/Title";

import styles from './CalcDateTitle.module.scss'

const CalcDateTitle = ({ name, date }) => {
  const t = useTranslations('Calculator.personal');
  return (
    <div className={styles.date_wrapper}>
      {name ? (
        <Title variant="p" styled={styles.date_title}>
          {name}
        </Title>
      ) : (
        <Title variant="p" styled={styles.date_title}>
          {t('b_date')}:
        </Title>
      )}
      <Title variant="p" styled={styles.date}>
        {date}
      </Title>
    </div>
  );
};

export default CalcDateTitle;

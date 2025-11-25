import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Title from '@/components/Common/Title/Title';
import { ageCalculator } from '@/helper/calculator/ageCalc';
import PeriodMapElement from './PeriodMapElement';

import styles from './PeriodMap.module.scss';

const PeriodMap = ({ period, date }) => {
  const [age, setAge] = useState(null);
  const t = useTranslations('Calculator.personal');
  useEffect(() => {
    if (!date) return;
    const [day, month, year] = date.split('.');
    const ageObj = ageCalculator(day, month, year);
    const currentAge =
      (ageObj.years ? ageObj.years : 0) +
      parseFloat(((ageObj.months ? ageObj.months : 0) / 12).toFixed(2));
    setAge(currentAge);
  }, [date]);

  if (!period) return null;

  return (
    <div className={styles.wrapper}>
      <Title variant="h3" styled={styles.title}>
        {t('period_map')}
      </Title>
      <ul className={styles.name_list}>
        <li className={styles.name_list_element}>
          <Title variant="p" styled={styles.column_name}>
            {t('year')}
          </Title>
          <Title variant="p" styled={styles.column_name}>
            {t('energy')}
          </Title>
        </li>
        <li className={styles.name_list_element}>
          <Title variant="p" styled={styles.column_name}>
            {t('year')}
          </Title>
          <Title variant="p" styled={styles.column_name}>
            {t('energy')}
          </Title>
        </li>
        <li className={styles.name_list_element}>
          <Title variant="p" styled={styles.column_name}>
            {t('year')}
          </Title>
          <Title variant="p" styled={styles.column_name}>
            {t('energy')}
          </Title>
        </li>
      </ul>
      <ul className={styles.period_table}>
        {period.map(el => (
          <PeriodMapElement
            key={el.age}
            age={el.age}
            arcane={el.arcane}
            date={date}
            currentAge={age}
          />
        ))}
        <PeriodMapElement age={'80'} arcane={period[0].arcane} date={date} currentAge={age} />
        <PeriodMapElement age={''} arcane={''} />
      </ul>
    </div>
  );
};

export default PeriodMap;

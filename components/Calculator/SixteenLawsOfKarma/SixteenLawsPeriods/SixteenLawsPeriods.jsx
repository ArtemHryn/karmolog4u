import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Dropdown } from 'primereact/dropdown';
import SixteenLawsStage from './SixteenLawsStage/SixteenLawsStage';

import styles from './SixteenLawsPeriods.module.scss';
import './period.scss';

const getPeriods = () => {
  const period = [{ id: 0, years: '0 - 5' }];
  let index = 1;
  for (let i = 5; i < 75; i += 10) {
    const years = `${i} - ${i + 10}`;
    period.push({ id: index, years });
    index++;
  }
  period.push({ id: index, years: '75 - 80' });
  return period;
};

const SixteenLawsPeriods = ({ periods, age }) => {
  const [periodEl, setPeriodEl] = useState({ id: 0, years: '0 - 5' });
  const t = useTranslations('Calculator.sixteen_laws');
  useEffect(() => {
    if (age === undefined || age === null) return;
    const getCurrentPeriod = age => {
      const periods = getPeriods();
      const currentPeriod = periods.find(el => {
        const [from, to] = el.years.split(' - ');
        return +from <= age && age < +to;
      });
      setPeriodEl(currentPeriod);
    };
    getCurrentPeriod(age);
  }, [age]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.text_wrapper}>
        <p className={styles.text}>{t('period_text1')}</p>
        <p className={styles.text}>{t('period_text2')}</p>
        <p className={styles.text}>{t('period_text3')}</p>
        <p className={styles.text}>{t('period_text4')}</p>
      </div>
      <div className={styles.selector_wrapper}>
        <p className={styles.selector_text}>{t('choose_period')}</p>
        <Dropdown
          value={periodEl}
          onChange={e => setPeriodEl(e.value)}
          options={getPeriods()}
          optionLabel="years"
          placeholder={t('choose_period')}
        />
      </div>
      <SixteenLawsStage periods={periods} chosenPeriod={periodEl} />
    </div>
  );
};

export default SixteenLawsPeriods;

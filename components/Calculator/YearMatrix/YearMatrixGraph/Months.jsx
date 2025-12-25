import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { addMonths, addYears, isValid, parse } from 'date-fns';

import styles from './YearMatrixGraph.module.scss';

const Months = () => {
  const t = useTranslations('Calculator.year.months');
  const search = useSearchParams();

  const getFirstMonth = () => {
    const bd = search.get('date');
    const periodStr = search.get('period');
    if (!bd || !periodStr) return 1;
    const birthDate = parse(bd, 'dd.MM.yyyy', new Date());
    if (!isValid(birthDate)) {
      console.error('Invalid birth date');
      return 1;
    }
    const period = Number(periodStr);
    const years = Math.floor(period);
    const months = Math.round((period - years) * 12);
    const resultDate = addMonths(addYears(birthDate, years), months);
    const month = resultDate.getMonth() + 1;
    return month;
  };

  const startIndex = getFirstMonth() - 1;

  const monthPositions = [
    { className: styles.jan },
    { className: styles.feb },
    { className: styles.mar },
    { className: styles.apr },
    { className: styles.may },
    { className: styles.jun },
    { className: styles.jul },
    { className: styles.aug },
    { className: styles.sep },
    { className: styles.oct },
    { className: styles.nov },
    { className: styles.dec },
  ];
  const monthKeys = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ];
  const orderedMonths = [...monthKeys.slice(startIndex), ...monthKeys.slice(0, startIndex)];

  return (
    <>
      {monthPositions.map(({ className }, index) => (
        <p key={index} className={`${styles.month} ${className}`}>
          {t(orderedMonths[index])}
        </p>
      ))}
      {/* <p className={`${styles.month} ${styles.jan}`}>{t('jan')}</p>
      <p className={`${styles.month} ${styles.feb}`}>{t('feb')}</p>
      <p className={`${styles.month} ${styles.mar}`}>{t('mar')}</p>
      <p className={`${styles.month} ${styles.apr}`}>{t('apr')}</p>
      <p className={`${styles.month} ${styles.may}`}>{t('may')}</p>
      <p className={`${styles.month} ${styles.jun}`}>{t('jun')}</p>
      <p className={`${styles.month} ${styles.jul}`}>{t('jul')}</p>
      <p className={`${styles.month} ${styles.aug}`}>{t('aug')}</p>
      <p className={`${styles.month} ${styles.sep}`}>{t('sep')}</p>
      <p className={`${styles.month} ${styles.oct}`}>{t('oct')}</p>
      <p className={`${styles.month} ${styles.nov}`}>{t('nov')}</p>
      <p className={`${styles.month} ${styles.dec}`}>{t('dec')}</p> */}
    </>
  );
};

export default Months;

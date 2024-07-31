import { useTranslations } from 'next-intl';

import styles from './YearMatrixGraph.module.scss';

const Months = () => {
  const t = useTranslations('Calculator.year.months');
  return (
    <>
      <p className={`${styles.month} ${styles.jan}`}>{t('jan')}</p>
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
      <p className={`${styles.month} ${styles.dec}`}>{t('dec')}</p>
    </>
  );
};

export default Months;

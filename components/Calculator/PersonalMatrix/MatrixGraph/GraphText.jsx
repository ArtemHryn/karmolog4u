import { useTranslations } from 'next-intl';
import styles from './MatrixGraph.module.scss';

const GraphText = ({ earthStyled }) => {
  const t = useTranslations('Calculator.personal.lines');
  return (
    <>
      <p className={`${styles.lines} ${styles.sky}`}>{t('sky')}</p>
      <p className={`${styles.lines} ${styles.earth} ${earthStyled}`}>{t('earth')}</p>
      <p className={`${styles.lines} ${styles.mother}`}>{t('mother')}</p>
      <p className={`${styles.lines} ${styles.father}`}>{t('father')}</p>
    </>
  );
};

export default GraphText;

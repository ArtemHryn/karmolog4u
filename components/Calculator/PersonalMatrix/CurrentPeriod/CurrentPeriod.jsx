import Title from '@/components/Common/Title/Title';

import styles from './CurrentPeriod.module.scss';
import { useTranslations } from 'next-intl';

const CurrentPeriod = ({ period }) => {
  const t = useTranslations('Calculator.personal');
  if (!period || Object.keys(period).length === 0) return null;
  const keys = period.arcane.split('-');

  return (
    <div className={styles.wrapper}>
      <Title variant="h3" styled={styles.title}>
        {t('current_period')}
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

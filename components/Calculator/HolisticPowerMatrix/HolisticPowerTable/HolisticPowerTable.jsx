import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

import styles from './HolisticPowerTable.module.scss';
import { useLocale, useTranslations } from 'next-intl';

const HolisticPowerTables = ({ table }) => {
  const t = useTranslations('Calculator.holistic');
  const locale = useLocale();
  if (Object.keys(table).length === 0) return null;
  return (
    <div className={styles.main_wrapper}>
      <TitleNoStyles styled={styles.title}>{t('table_tile')}</TitleNoStyles>
      <ul className={styles.main_table}>
        {table.map(el => (
          <li key={el.name[locale]} className={styles.main_table_element}>
            <p className={styles.main_table_element_name}>{el.name[locale]}</p>
            {el.keys.map((key, index) => (
              <p key={index} className={styles.main_table_element_key}>
                {key}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HolisticPowerTables;

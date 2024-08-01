import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import styles from './Table.module.scss';
import { useLocale, useTranslations } from 'next-intl';

const TableColumnNames = ({ table, isChildren }) => {
  const locale = useLocale();
  const t = useTranslations('Calculator.parents');
  return (
    <ul className={styles.column_names_list}>
      {isChildren && (
        <>
          <li className={styles.column_names_element}>
            <TitleNoStyles
              variant="p"
              styled={`${styles.column_name_text} ${styles.column_name_text_mob}`}
            >
              {t('month_short')}
            </TitleNoStyles>
            <TitleNoStyles
              variant="p"
              styled={`${styles.column_name_text} ${styles.column_name_text_tablet}`}
            >
              {t('month')}
            </TitleNoStyles>
          </li>
        </>
      )}
      {table.columnNames[locale].map(el => (
        <li key={el} className={styles.column_names_element}>
          <TitleNoStyles variant="p" styled={styles.column_name_text}>
            {el}
          </TitleNoStyles>
        </li>
      ))}
    </ul>
  );
};

export default TableColumnNames;

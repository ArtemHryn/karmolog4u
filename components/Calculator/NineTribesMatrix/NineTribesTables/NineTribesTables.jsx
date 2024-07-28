import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import NineTribesOneTable from './NineTribesOneTable/NineTribesOneTable';

import styles from './NineTribesTables.module.scss';
import { useTranslations } from 'next-intl';

const NineTribesTables = ({ tables }) => {
  const t = useTranslations('Calculator.nine_tribes');
  const tablesList = Object.keys(tables);
  if (tablesList.length === 0) return null;
  return (
    <div>
      <TitleNoStyles styled={styles.title}>{t('nine_tribes_table_title')}</TitleNoStyles>
      <ul className={styles.tables_list}>
        {tablesList.map((table, index) => (
          <NineTribesOneTable table={tables[table]} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default NineTribesTables;

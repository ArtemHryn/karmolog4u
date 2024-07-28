import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import KneelingTable from './KneelingTable/KneelingTable';

import styles from './Kneeling.module.scss';
import { useTranslations } from 'next-intl';

const Kneeling = ({ table }) => {
  const t = useTranslations('Calculator.nine_tribes');
  if (!table) return null;
  return (
    <div className={styles.kneeling_wrapper}>
      <TitleNoStyles variant="h2" styled={styles.title}>
        {t('kneeling_table_title')}
      </TitleNoStyles>
      <KneelingTable table={table} />
    </div>
  );
};

export default Kneeling;

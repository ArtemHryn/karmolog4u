import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import KneelingTable from './KneelingTable/KneelingTable';

import styles from './Kneeling.module.scss';

const Kneeling = ({ table }) => {
  if (!table) return null;
  return (
    <div className={styles.kneeling_wrapper}>
      <TitleNoStyles variant="h2" styled={styles.title}>
        Розрахунок колінопоклоніння
      </TitleNoStyles>
      <KneelingTable table={table} />
    </div>
  );
};

export default Kneeling;

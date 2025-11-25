import Tick from './Tick';

import styles from './Filter.module.scss';
import { ADMIN_CLOSED, ADMIN_ENERGIES, ADMIN_OPENED } from '@/helper/consts';

const Filter = ({
  energies,
  setEnergies,
  showOpenedMeditation,
  setShowOpenedMeditation,
  showClosedMeditation,
  setShowClosedMeditation,
}) => {
  return (
    <ul className={styles.list}>
      <li>
        <Tick
          name={'Медитації по 22 енергіях'}
          setTick={setEnergies}
          localStorageName={ADMIN_ENERGIES}
          id={31}
          tick={energies}
        />
      </li>
      <li>
        <Tick
          name={'Медитації у закритому доступі'}
          setTick={setShowClosedMeditation}
          localStorageName={ADMIN_CLOSED}
          id={32}
          tick={showClosedMeditation}
        />
      </li>
      <li>
        <Tick
          name={'Медитації у відкритому доступі'}
          setTick={setShowOpenedMeditation}
          localStorageName={ADMIN_OPENED}
          id={33}
          tick={showOpenedMeditation}
        />
      </li>
    </ul>
  );
};

export default Filter;

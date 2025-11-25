import Tick from '../../Meditations/Filter/Tick';
import { ADMIN_BOOKS, ADMIN_GUIDES, ADMIN_OTHER_GUIDES } from '@/helper/consts';

import styles from './Filter.module.scss';

const Filter = ({
  showGuides,
  setShowGuides,
  showOthersGuide,
  setShowOtherGuides,
  showBooks,
  setShowBooks,
}) => {
  return (
    <ul className={styles.list}>
      <li>
        <Tick
          name={'Гайди по 22 енергіям'}
          setTick={setShowGuides}
          localStorageName={ADMIN_GUIDES}
          id={51}
          tick={showGuides}
        />
      </li>
      <li>
        <Tick
          name={'Інші гайди'}
          setTick={setShowOtherGuides}
          localStorageName={ADMIN_OTHER_GUIDES}
          id={52}
          tick={showOthersGuide}
        />
      </li>
      <li>
        <Tick
          name={'Друковані видання'}
          setTick={setShowBooks}
          localStorageName={ADMIN_BOOKS}
          id={53}
          tick={showBooks}
        />
      </li>
    </ul>
  );
};

export default Filter;

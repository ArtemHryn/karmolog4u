import AlarmClock from '@components/Common/Icons/ConsultationsIcons/AlarmClock';
import { open_Sans } from '@app/[locale]/layout';

import styles from './TariffList.module.scss';

const ActiveDropDown = ({ isOpen, setIsOpen, description, time }) => {
  return (
    <div className={`${styles.description_wrapper} ${isOpen ? '' : styles.is_hidden}`}>
      <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
      <p className={styles.time}>
        {isOpen && <AlarmClock styled={styles.icon} />} : {time}
      </p>
      <button
        aria-label="Close more details"
        className={`${styles.details_btn} ${open_Sans.className}`}
        onClick={() => setIsOpen(false)}
      >
        Закрити
      </button>
    </div>
  );
};

export default ActiveDropDown;

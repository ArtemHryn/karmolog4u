import TitleNoStyles from '../../../../../../Common/TitleNoStyles/TitleNoStyles';
import EventPanel from './EventPanel/EventPanel';

import styles from './Title.module.scss';

const events = {
  '2025-07-18': 'Конференція з ІТ',
  '2025-07-23': 'Зустріч команди',
  '2025-08-18': 'Конференція з ІТ',
  '2025-09-23': 'Зустріч команди',
};
const Title = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <EventPanel events={events} />
      {title && <TitleNoStyles styled={styles.title}>{title}</TitleNoStyles>}
    </div>
  );
};

export default Title;

import TitleNoStyles from '../../../../../../Common/TitleNoStyles/TitleNoStyles';
import EventPanel from './EventPanel/EventPanel';

import styles from './Title.module.scss';

const Title = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <EventPanel />
      {title && <TitleNoStyles styled={styles.title}>{title}</TitleNoStyles>}
    </div>
  );
};

export default Title;

import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

import styles from './Head.module.scss';
import Search from '../Search/Search';

const Head = ({ search, setSearch }) => {
  return (
    <div className={styles.wrapper}>
      <TitleNoStyles styled={styles.title}>Видалене</TitleNoStyles>
      <div className={styles.search_visibility}>
        <Search search={search} setSearch={setSearch} />
      </div>
    </div>
  );
};

export default Head;

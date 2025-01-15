import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import Search from '../../Deleted/Search/Search';

import styles from './PromoHead.module.scss';
import AddPromo from './AddPromo/AddPromo';

const PromoHead = ({ search, setSearch }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title_wrapper}>
        <TitleNoStyles styled={styles.title}>Промокод</TitleNoStyles>
        <div className={styles.add_button_visibility}>
          <AddPromo />
        </div>
      </div>
      <div className={styles.search_visibility}>
        <Search search={search} setSearch={setSearch} />
        <div className={styles.add_button_visibility_in_search}>
          <AddPromo />
        </div>
      </div>
    </div>
  );
};

export default PromoHead;

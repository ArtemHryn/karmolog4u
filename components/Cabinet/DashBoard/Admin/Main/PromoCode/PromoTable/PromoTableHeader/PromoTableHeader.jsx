import { useState } from 'react';
import Search from '../../../Deleted/Search/Search';
import AddPromo from '../../PromoHead/AddPromo/AddPromo';
import SimpleModalContainer from '../../../../../../../Common/SimpleModalContainer/SimpleModalContainer';
import PromoModalForm from '../../PromoHead/AddPromo/PromoModal/PromoModalForm/PromoModalForm';

import styles from './PromoTableHeader.module.scss';

const PromoTableHeader = ({ search, setSearch }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.wrapper}>
      <p className={styles.table_name}>Створені промокоди</p>
      <div className={styles.search_visibility}>
        <Search search={search} setSearch={setSearch} />
        <AddPromo setShowModal={setShowModal} />
      </div>
      {showModal && (
        <SimpleModalContainer setShowModal={setShowModal} showCenter>
          <PromoModalForm setShowModal={setShowModal} />
        </SimpleModalContainer>
      )}
    </div>
  );
};

export default PromoTableHeader;

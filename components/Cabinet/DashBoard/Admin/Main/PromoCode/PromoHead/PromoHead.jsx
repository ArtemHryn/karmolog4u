'use client'

import { useState } from 'react';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import Search from '../../Deleted/Search/Search';

import AddPromo from './AddPromo/AddPromo';
import SimpleModalContainer from '../../../../../../Common/SimpleModalContainer/SimpleModalContainer';
import PromoModalForm from './AddPromo/PromoModal/PromoModalForm/PromoModalForm';
import styles from './PromoHead.module.scss';

const PromoHead = ({ search, setSearch }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title_wrapper}>
        <TitleNoStyles styled={styles.title}>Промокод</TitleNoStyles>
        <div className={styles.add_button_visibility}>
          <AddPromo setShowModal={setShowModal} />
        </div>
      </div>
      <div className={styles.search_visibility}>
        <Search search={search} setSearch={setSearch} />
        <div className={styles.add_button_visibility_in_search}>
          <AddPromo setShowModal={setShowModal} />
        </div>
      </div>
      {showModal && (
        <SimpleModalContainer setShowModal={setShowModal} showCenter>
          <PromoModalForm setShowModal={setShowModal} />
        </SimpleModalContainer>
      )}
    </div>
  );
};

export default PromoHead;

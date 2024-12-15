'use client';

import { useEffect, useState } from 'react';
import Filter from './Filter/Filter';

import styles from './Webinars.module.scss';
import Status from '../Meditations/Status/Status';
import { webinarsList } from '@helper/db/webinars';
import WebinarsList from './WebinarsList/WebinarsList';
import { ADMIN_ETHERS, ADMIN_WEBINARS } from '@helper/consts';

const Webinars = () => {
  const [showWebinars, setShowWebinars] = useState(false);
  const [showEthers, setShowEthers] = useState(false);
  const [isCheckedLS, setIsCheckedLS] = useState(false);
  const [status, setStatus] = useState('all');

  useEffect(() => {
    if (!isCheckedLS) {
      setShowWebinars(() => JSON.parse(window.localStorage.getItem(ADMIN_WEBINARS)) ?? false);
      setShowEthers(() => JSON.parse(window.localStorage.getItem(ADMIN_ETHERS)) ?? false);
      setIsCheckedLS(true);
    }
  }, [isCheckedLS]);

  return (
    <div className={styles.wrapper}>
      <Filter
        webinars={showWebinars}
        setWebinars={setShowWebinars}
        showEthers={showEthers}
        setShowEthers={setShowEthers}
      />
      <Status activeStatus={status} setActiveStatus={setStatus} products={webinarsList} />
      <WebinarsList
        showWebinars={showWebinars}
        showEthers={showEthers}
        isCheckedLS={isCheckedLS}
        status={status}
        webinars={webinarsList}
      />
    </div>
  );
};

export default Webinars;

'use client';

import { useEffect, useState } from 'react';
import Filter from './Filter/Filter';
import MeditationsList from './MeditationsList/MeditationsList';
import Status from './Status/Status';

import styles from './Meditations.module.scss';
import { ADMIN_CLOSED, ADMIN_ENERGIES, ADMIN_OPENED } from '@helper/consts';

const Meditations = () => {
  const [energies, setEnergies] = useState(false);
  const [showOpenedMeditation, setShowOpenedMeditation] = useState(false);
  const [showClosedMeditation, setShowClosedMeditation] = useState(false);
  const [isCheckedLS, setIsCheckedLS] = useState(false);
  const [status, setStatus] = useState('all');

  useEffect(() => {
    if (!isCheckedLS) {
      setEnergies(() => {
        return JSON.parse(window.localStorage.getItem(ADMIN_ENERGIES)) ?? false;
      });
      setShowOpenedMeditation(() => {
        return JSON.parse(window.localStorage.getItem(ADMIN_OPENED)) ?? false;
      });
      setShowClosedMeditation(() => {
        return JSON.parse(window.localStorage.getItem(ADMIN_CLOSED)) ?? false;
      });
      setIsCheckedLS(true);
    }
  }, [isCheckedLS]);

  return (
    <div className={styles.wrapper}>
      <Filter
        energies={energies}
        setEnergies={setEnergies}
        showOpenedMeditation={showOpenedMeditation}
        setShowOpenedMeditation={setShowOpenedMeditation}
        showClosedMeditation={showClosedMeditation}
        setShowClosedMeditation={setShowClosedMeditation}
      />
      <Status activeStatus={status} setActiveStatus={setStatus} />
      <MeditationsList
        energies={energies}
        opened={showOpenedMeditation}
        closed={showClosedMeditation}
        isCheckedLS={isCheckedLS}
        status={status}
      />
    </div>
  );
};

export default Meditations;

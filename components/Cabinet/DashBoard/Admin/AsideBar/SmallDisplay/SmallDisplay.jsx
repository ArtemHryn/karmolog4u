'use client';

import { useState } from 'react';
import Arrows from './Arrows';

import styles from './SmallDisplay.module.scss';
import NavigationList from '../NavigationList/NavigationList';

const SmallDisplay = () => {
  const [showAside, setShowAside] = useState(false);
  return (
    <aside className={`${styles.aside} ${showAside ? styles.aside_show : ''}`}>
      <button onClick={() => setShowAside(prev => !prev)} className={styles.show_button}>
        <Arrows showAside={showAside} />
      </button>
      <NavigationList />
    </aside>
  );
};

export default SmallDisplay;

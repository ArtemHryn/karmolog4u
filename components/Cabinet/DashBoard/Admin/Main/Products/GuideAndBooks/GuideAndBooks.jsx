'use client';

import { useEffect, useState } from 'react';

import { ADMIN_BOOKS, ADMIN_GUIDES, ADMIN_OTHER_GUIDES } from '@helper/consts';

import styles from './GuideAndBooks.module.scss';
import Filter from './Filter/Filter';
import Status from '../Meditations/Status/Status';
import { guide_and_books } from '@helper/db/guide_and_books';
import GuideAndBooksList from './GuideAndBooksList/GuideAndBooksList';

const GuideAndBooks = () => {
  const [showGuides, setShowGuides] = useState(false);
  const [showOthersGuide, setShowOtherGuides] = useState(false);
  const [showBooks, setShowBooks] = useState(false);
  const [isCheckedLS, setIsCheckedLS] = useState(false);
  const [status, setStatus] = useState('all');

  useEffect(() => {
    if (!isCheckedLS) {
      setShowGuides(() => JSON.parse(window.localStorage.getItem(ADMIN_GUIDES)) ?? false);
      setShowOtherGuides(
        () => JSON.parse(window.localStorage.getItem(ADMIN_OTHER_GUIDES)) ?? false
      );
      setShowBooks(() => JSON.parse(window.localStorage.getItem(ADMIN_BOOKS)) ?? false);
      setIsCheckedLS(true);
    }
  }, [isCheckedLS]);

  return (
    <div className={styles.wrapper}>
      <Filter
        showGuides={showGuides}
        setShowGuides={setShowGuides}
        showOthersGuide={showOthersGuide}
        setShowOtherGuides={setShowOtherGuides}
        showBooks={showBooks}
        setShowBooks={setShowBooks}
      />
      <Status activeStatus={status} setActiveStatus={setStatus} products={guide_and_books} />
      <GuideAndBooksList
        showGuides={showGuides}
        showOthersGuide={showOthersGuide}
        showBooks={showBooks}
        isCheckedLS={isCheckedLS}
        status={status}
        guideAndBooks={guide_and_books}
      />
    </div>
  );
};

export default GuideAndBooks;

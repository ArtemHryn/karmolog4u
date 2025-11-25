'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';

import Status from '../Meditations/Status/Status';
import Filter from './Filter/Filter';
import GuideAndBooksList from './GuideAndBooksList/GuideAndBooksList';
import SkeletonProducts from '../SkeletonProducts/SkeletonProducts';

import { ADMIN_BOOKS, ADMIN_GUIDES, ADMIN_OTHER_GUIDES, base_url } from '@/helper/consts';
import styles from './GuideAndBooks.module.scss';

const fetchGuidesAndBooks = async token => {
  const response = await fetch(`${base_url}/admin/products/guides-and-books/get-all`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Помилка завантаження вебінарів');
  }
  return response.json();
};

const GuideAndBooks = () => {
  const [showGuides, setShowGuides] = useState(false);
  const [showOthersGuide, setShowOtherGuides] = useState(false);
  const [showBooks, setShowBooks] = useState(false);
  const [isCheckedLS, setIsCheckedLS] = useState(false);
  const [status, setStatus] = useState('all');
  const { data: token } = useSession();

  const {
    data: guides_and_books,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['guides-and-books'],
    queryFn: () => fetchGuidesAndBooks(token.accessToken),
  });

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

  if (isError) return <div>Error...</div>;

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
      <Status activeStatus={status} setActiveStatus={setStatus} products={guides_and_books} />
      {isLoading ? (
        <SkeletonProducts />
      ) : (
        <GuideAndBooksList
          showGuides={showGuides}
          showOthersGuide={showOthersGuide}
          showBooks={showBooks}
          isCheckedLS={isCheckedLS}
          status={status}
          guideAndBooks={guides_and_books}
        />
      )}
    </div>
  );
};

export default GuideAndBooks;

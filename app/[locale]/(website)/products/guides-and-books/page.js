'use client';

import { useEffect, useState } from 'react';
import Container from '@components/Common/Container/Container';
import GuideAndBooksCheckboxes from '@components/Products/GuidesAndBooks/GuideAndBooksCheckboxes';

import GuidesAndBooksList from '@components/Products/GuidesAndBooks/GuidesAndBooks';
import GuideDescription from '@components/Products/GuidesAndBooks/GuideDescription';

const GuidesAndBooksPage = () => {
  const [showGuides, setGuides] = useState(false);
  const [showOtherGuides, setShowOtherGuides] = useState(false);
  const [showBooks, setShowBooks] = useState(false);

  useEffect(() => {
    setGuides(() => {
      return JSON.parse(window.localStorage.getItem('showGuides')) ?? true;
    });
    setShowOtherGuides(() => {
      return JSON.parse(window.localStorage.getItem('showOtherGuides')) ?? false;
    });
    setShowBooks(() => {
      return JSON.parse(window.localStorage.getItem('showBooks')) ?? false;
    });
  }, []);

  return (
    <Container>
      <GuideAndBooksCheckboxes
        setGuides={setGuides}
        setShowOtherGuides={setShowOtherGuides}
        setShowBooks={setShowBooks}
        showGuides={showGuides}
        showOtherGuides={showOtherGuides}
        showBooks={showBooks}
      />
      {showGuides && <GuideDescription />}
      <GuidesAndBooksList
        showGuides={showGuides}
        showOtherGuides={showOtherGuides}
        showBooks={showBooks}
      />
    </Container>
  );
};

export default GuidesAndBooksPage;

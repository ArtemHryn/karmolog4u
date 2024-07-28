'use client';

import { useEffect, useState } from 'react';
import Container from '@components/Common/Container/Container';
import GuideAndBooksCheckboxes from '@components/Products/GuidesAndBooks/GuideAndBooksCheckboxes';

import styles from '@components/Products/GuidesAndBooks/GuidesAndBooks.module.scss';
import GuidesAndBooksList from '@components/Products/GuidesAndBooks/GuidesAndBooks';

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
      {showGuides && (
        <p className={styles.about_guides}>
          Гайди по 22 архетипах — це трактування 22 кодів долі, які допоможуть вам усвідомити прояви
          кожної з енергій в характері людини. Завдяки матеріалу гайдів, ви чітко зрозумієте, як на
          ваше життя впливає кожен архетип, які його якості проявляються на побутовому плані, як
          віднайти ресурс архетипів та зможете трансформувати його деструктивні прояви.{' '}
          <span>
            Ці гайди спрямовані на поглиблене пізнання себе і свого проявлення в цьому світі, а
            також допомагають  зрозуміти причинно-наслідковий зв&apos;язок того, що відбувається у
            вашому житті.
          </span>
        </p>
      )}
      <GuidesAndBooksList
        showGuides={showGuides}
        showOtherGuides={showOtherGuides}
        showBooks={showBooks}
      />
    </Container>
  );
};

export default GuidesAndBooksPage;

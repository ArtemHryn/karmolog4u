import { useEffect, useState } from "react";

import Meditation from "../Meditations/Meditation";
import list from "@helper/products/guidesAndBooksList";

import styles from "./GuidesAndBooks.module.scss";

const GuidesAndBooksList = ({ showGuides, showOtherGuides, showBooks }) => {
  const [guideAndBooksList, setGuideAndBooksList] = useState([]);

  useEffect(() => {
    if (!showGuides && !showOtherGuides && !showBooks) {
      setGuideAndBooksList([...list.guideTTEnergies]);
      return;
    }
    setGuideAndBooksList([
      ...(showGuides ? list.guideTTEnergies : []),
      ...(showOtherGuides ? list.otherGuidesList : []),
      ...(showBooks ? list.booksList : []),
    ]);
  }, [showBooks, showGuides, showOtherGuides]);

  if (guideAndBooksList.length === 0) return null;
  return (
    <ul className={styles.guide_and_books_list}>
      {guideAndBooksList.map((el) => (
        <li key={el.name} className={styles.guide_and_books_list_item}>
          <Meditation card={el} />
        </li>
      ))}
    </ul>
  );
};

export default GuidesAndBooksList;

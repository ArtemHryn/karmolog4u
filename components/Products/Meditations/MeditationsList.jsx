import { useEffect, useState } from "react";
import list from "@helper/products/meditationsList";
import Meditation from "./Meditation";

import styles from "./Meditations.module.scss";

const MeditationsList = ({
  energies,
  showOpenedMeditation,
  showClosedMeditation,
}) => {
  const [meditationList, setMeditationList] = useState([]);
  useEffect(() => {
    if (!energies && !showOpenedMeditation && !showClosedMeditation) {
      setMeditationList([
        ...list.getMeditationsArcanesList(),
        ...list.getClosedMeditationsList(),
        ...list.getOpenedMeditationsList(),
      ]);
      return;
    }
    setMeditationList([
      ...(energies ? list.getMeditationsArcanesList() : []),
      ...(showClosedMeditation ? list.getClosedMeditationsList() : []),
      ...(showOpenedMeditation ? list.getOpenedMeditationsList() : []),
    ]);
  }, [energies, showClosedMeditation, showOpenedMeditation]);

  if (meditationList.length === 0) return null;
  return (
    <ul className={styles.meditation_list}>
      {meditationList.map((el) => (
        <li key={el.name} className={styles.meditation_list_item}>
          <Meditation card={el} />
        </li>
      ))}
    </ul>
  );
};

export default MeditationsList;

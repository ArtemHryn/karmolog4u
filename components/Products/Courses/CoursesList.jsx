import { useEffect, useState } from "react";
import Meditation from "../Meditations/Meditation";

import list from "@helper/products/coursesList";
import styles from "./Courses.module.scss";

const CoursesList = ({ showWebinars, showIntensives, showEthers }) => {
  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    if (!showWebinars && !showIntensives && !showEthers) {
      setCoursesList([...list.webinars, ...list.intensives, ...list.ethers]);
      return;
    }
    setCoursesList([
      ...(showWebinars ? list.webinars : []),
      ...(showIntensives ? list.intensives : []),
      ...(showEthers ? list.ethers : []),
    ]);
  }, [showEthers, showIntensives, showWebinars]);

  if (coursesList.length === 0) return null;
  return (
    <ul className={styles.courses_list}>
      {coursesList.map((el) => (
        <li key={el.name} className={styles.courses_list_item}>
          <Meditation card={el} />
        </li>
      ))}
    </ul>
  );
};

export default CoursesList;

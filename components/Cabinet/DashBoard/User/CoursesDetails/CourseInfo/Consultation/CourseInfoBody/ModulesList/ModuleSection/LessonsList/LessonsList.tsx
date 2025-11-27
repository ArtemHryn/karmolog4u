import { ModuleSectionProps } from '@/types/cons_adv_courses';
import React from 'react';
import Day from './Day/Day';
import styles from './LessonsList.module.scss';

interface LessonsListProps extends ModuleSectionProps {
  showLessons: boolean;
}

const LessonsList = ({ mod, showLessons }: LessonsListProps) => {
  const getLessonsSortedList = () => {
    const list: { [key: string]: typeof mod.lessonsList } = {};
    for (let i = 1; i <= mod.durationInDays; i++) {
      const el = mod.lessonsList.filter(el => el.moduleDay === i);
      if (el.length === 0) continue;

      list[`${i}day`] = el.sort((a, b) => a.modulePart - b.modulePart);
    }
    return list;
  };
  const days = getLessonsSortedList();

console.log(mod);


  return (
    <ul className={`${styles.list} ${showLessons ? '' : styles.close}`}>
      {Object.keys(days).map((el, index) => (
        <Day lessons={days[el]} key={index} day={Number.parseInt(el)} />
      ))}
    </ul>
  );
};

export default LessonsList;

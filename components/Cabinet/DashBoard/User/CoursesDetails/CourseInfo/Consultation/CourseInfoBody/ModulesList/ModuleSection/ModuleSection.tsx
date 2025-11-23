'use client';

import { useState } from 'react';
import { ModuleSectionProps } from '@/types/cons_adv_courses';
import ModuleHeader from './ModuleHeader/ModuleHeader';
import ModuleIcon from './ModuleIcon';

import styles from './ModuleSection.module.scss';
import LessonsList from './LessonsList/LessonsList';

const ModuleSection = ({ mod }: ModuleSectionProps) => {
  const [showLessons, setShowLessons] = useState(true);

  if (mod.lessonsList.length === 0) return null;
  
  return (
    <li className={styles.item}>
      <div className={styles.icon_wrapper}>
        <ModuleIcon />
      </div>
      <article className={styles.article}>
        <ModuleHeader mod={mod} showLessons={showLessons} setShowLessons={setShowLessons} />
        <LessonsList mod={mod} showLessons={showLessons} />
      </article>
    </li>
  );
};

export default ModuleSection;

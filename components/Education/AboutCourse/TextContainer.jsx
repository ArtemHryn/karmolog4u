'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import styles from './AboutCourse.module.scss';

const TextContainer = ({ text }) => {
  const [showMore, setShowMore] = useState(false);
  const t = useTranslations('Education.karmologist_himself.about_course');
  return (
    <div className={styles.text_wrapper}>
      <div className={`${styles.text_container} ${showMore ? styles.text_container_more : ''}`}>
        {text.map((item, index) => (
          <p key={index} className={`${styles.text}`}>
            {item}
          </p>
        ))}
      </div>
      <button
        className={styles.btn}
        aria-label={t('arial_toggle_btn')}
        onClick={() => setShowMore(prev => !prev)}
      >
        {showMore ? t('close') : t('show_more')}
      </button>
    </div>
  );
};

export default TextContainer;

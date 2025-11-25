'use client';
import React, { useState } from 'react';
import styles from './QuestionAnswer.module.scss';
import ArrowDownV2 from '@/components/Common/Icons/ArrowDownV2';
import { unbounded } from '@/app/[locale]//layout';

function Dropdown({ q, a }) {
  const [open, setOpen] = useState(null);
  return (
    <>
      <button
        className={`${styles.drop_btn} ${unbounded.className}`}
        onClick={() => setOpen(!open)}
      >
        <span className={styles.drop_btn_text}>{q}</span>
        {<ArrowDownV2 styled={` ${styles.drop_icon} ${open ? styles.drop_icon_rotate : ''}`} />}
      </button>
      <div className={` ${styles.drop_container} ${open ? styles.drop_open : ''}`}>
        <p dangerouslySetInnerHTML={{ __html: a }} className={styles.drop_content} />
      </div>
    </>
  );
}

export default Dropdown;

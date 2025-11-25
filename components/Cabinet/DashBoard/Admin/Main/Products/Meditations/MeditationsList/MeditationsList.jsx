'use client';

import { useEffect, useState } from 'react';
import EditButton from './EditButton/EditButton';

import {
  ARCANES,
  CLOSED_MEDITATIONS,
  DRAFT,
  HIDDEN,
  OPENED_MEDITATIONS,
  PUBLISHED,
} from '@/helper/consts';
import styles from './MeditationsList.module.scss';

const statusInfo = [
  { orig_name: PUBLISHED, web_name: 'Опубліковано' },
  { orig_name: HIDDEN, web_name: 'Приховано' },
  { orig_name: DRAFT, web_name: 'Чернетка' },
];

const MeditationsList = ({ energies, opened, closed, isCheckedLS, status, meditations }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!isCheckedLS) return;
    const sortedByCategory = [
      ...(energies ? meditations.filter(el => el.category.includes(ARCANES)) : []),
      ...(closed ? meditations.filter(el => el.category.includes(CLOSED_MEDITATIONS)) : []),
      ...(opened ? meditations.filter(el => el.category.includes(OPENED_MEDITATIONS)) : []),
    ];
    const finalList = [
      ...(status === 'all'
        ? sortedByCategory
        : sortedByCategory.filter(el => el.status === status)),
    ];
    setList(finalList);
  }, [closed, energies, isCheckedLS, meditations, opened, status]);

  if (list.length === 0) return null;

  return (
    <ul className={styles.list}>
      {list.map(({ _id: id, status, name }) => {
        const statusItem = statusInfo.find(el => el.orig_name === status);

        return (
          <li key={id} className={styles.item}>
            <div className={styles.manage_wrapper}>
              <p className={`${styles.status} ${styles[`status_${statusItem.orig_name}`]}`}>
                {statusItem.web_name}
              </p>
              <EditButton id={id} name={name.uk} status={status} />
            </div>
            <p className={styles.name}>{name.uk}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MeditationsList;

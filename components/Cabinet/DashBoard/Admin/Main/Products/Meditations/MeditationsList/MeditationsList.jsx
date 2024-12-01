'use client';

import { useEffect, useState } from 'react';
import { meditations } from '@helper/db/meditations';
import EditButton from './EditButton/EditButton';

import styles from './MeditationsList.module.scss';

const statusInfo = [
  { orig_name: 'published', web_name: 'Опубліковано' },
  { orig_name: 'hidden', web_name: 'Приховано' },
  { orig_name: 'draft', web_name: 'Чернетка' },
];

const MeditationsList = ({ energies, opened, closed, isCheckedLS, status }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!isCheckedLS) return;
    const sortedByCategory = [
      ...(energies ? meditations.filter(el => el.category.includes('arcanes')) : []),
      ...(closed ? meditations.filter(el => el.category.includes('closed')) : []),
      ...(opened ? meditations.filter(el => el.category.includes('opened')) : []),
    ];
    const finalList = [
      ...(status === 'all'
        ? sortedByCategory
        : sortedByCategory.filter(el => el.status === status)),
    ];
    setList(finalList);
  }, [closed, energies, isCheckedLS, opened, status]);

  if (list.length === 0) return null;

  return (
    <ul className={styles.list}>
      {list.map(({ id, status, name }) => {
        const statusItem = statusInfo.find(el => el.orig_name === status);

        return (
          <li key={id} className={styles.item}>
            <div className={styles.manage_wrapper}>
              <p className={`${styles.status} ${styles[`status_${statusItem.orig_name}`]}`}>
                {statusItem.web_name}
              </p>
              <EditButton id={id} list={list} setList={setList} name={name} status={status} />
            </div>
            <p className={styles.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MeditationsList;

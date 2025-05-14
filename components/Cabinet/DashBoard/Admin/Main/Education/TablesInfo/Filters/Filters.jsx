'use client';

import { useState } from 'react';
import { open_Sans } from '../../../../../../../../app/[locale]/layout';

import styles from './Filters.module.scss';

const filtersList = [
  { name: 'Чернетки', link: '1' },
  { name: 'Опубликовані', link: '2' },
  { name: 'Архів', link: '3' },
];

const Filters = () => {
  const [activeBtn, setActiveBtn] = useState('1');
  return (
    <ul className={styles.list}>
      {filtersList.map(({ name, link }, id) => (
        <li key={id}>
          <button
            className={`${styles.button} ${open_Sans.className} ${
              activeBtn === link ? styles.button_active : ''
            }`}
            onClick={() => setActiveBtn(link)}
          >
            {name}
            <span>(0)</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Filters;

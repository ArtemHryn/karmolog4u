'use client';

import { open_Sans } from '@/app/[locale]/layout';

import styles from './Filters.module.scss';
import { PUBLISHED, DRAFT, ARCHIVE } from '/helper/consts';

const filtersList = [
  { name: 'Чернетки', link: DRAFT },
  { name: 'Опубликовані', link: PUBLISHED },
  { name: 'Архів', link: ARCHIVE },
];

const Filters = ({ activeBtn, setActiveBtn }) => {
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

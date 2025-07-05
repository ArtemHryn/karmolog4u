'use client';

import { open_Sans } from '@/app/[locale]/layout';

import styles from './Filters.module.scss';
import { PUBLISHED, DRAFT, ARCHIVE } from '/helper/consts';

const filtersList = [
  { name: 'Чернетки', link: DRAFT },
  { name: 'Опубликовані', link: PUBLISHED },
  { name: 'Архів', link: ARCHIVE },
];

const Filters = ({ activeBtn, setActiveBtn, numberOfCourses }) => {
  const onFilterChange = () => {
    if (!numberOfCourses) return filtersList;

    return filtersList.map(el => ({ ...el, count: numberOfCourses[el.link] }));
  };

  return (
    <ul className={styles.list}>
      {onFilterChange().map(({ name, link, count }, id) => (
        <li key={id}>
          <button
            className={`${styles.button} ${open_Sans.className} ${
              activeBtn === link ? styles.button_active : ''
            }`}
            onClick={() => setActiveBtn(link)}
          >
            {name}
            <span>({count ? count : 0})</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Filters;

import { useEffect, useState } from 'react';
import { BOOKS, DRAFT, GUIDES, HIDDEN, OTHER_GUIDES, PUBLISHED } from '@helper/consts';

import styles from './GuideAndBooksList.module.scss';
import EditButton from './EditButton/EditButton';

const statusInfo = [
  { orig_name: PUBLISHED, web_name: 'Опубліковано' },
  { orig_name: HIDDEN, web_name: 'Приховано' },
  { orig_name: DRAFT, web_name: 'Чернетка' },
];

const GuideAndBooksList = ({
  showGuides,
  showOthersGuide,
  showBooks,
  isCheckedLS,
  status,
  guideAndBooks,
}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!isCheckedLS) return;
    const sortedByCategory = [
      ...(showGuides ? guideAndBooks.filter(el => el.category === GUIDES) : []),
      ...(showOthersGuide ? guideAndBooks.filter(el => el.category === OTHER_GUIDES) : []),
      ...(showBooks ? guideAndBooks.filter(el => el.category === BOOKS) : []),
    ];

    const finalList = [
      ...(status === 'all'
        ? sortedByCategory
        : sortedByCategory.filter(el => el.status === status)),
    ];

    setList(finalList);
  }, [guideAndBooks, isCheckedLS, showBooks, showGuides, showOthersGuide, status]);

  return (
    <ul className={styles.list}>
      {list.map(({ _id: id, status, name }) => {
        const statusItem = statusInfo.find(el => el.orig_name === status);

        return (
          <li key={`${id}`} className={styles.item}>
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

export default GuideAndBooksList;

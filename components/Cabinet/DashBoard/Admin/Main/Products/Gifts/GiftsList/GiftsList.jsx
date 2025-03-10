import { useEffect, useState } from 'react';
import { DRAFT, HIDDEN, PUBLISHED } from '@helper/consts';
import EditButton from './EditButton/EditButton';

import styles from './GiftsList.module.scss';

const statusInfo = [
  { orig_name: PUBLISHED, web_name: 'Опубліковано' },
  { orig_name: HIDDEN, web_name: 'Приховано' },
  { orig_name: DRAFT, web_name: 'Чернетка' },
];
const GiftsList = ({ status, gifts }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const finalList = [...(status === 'all' ? gifts : gifts.filter(el => el.status === status))];
    setList(finalList);
  }, [gifts, status]);

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

export default GiftsList;

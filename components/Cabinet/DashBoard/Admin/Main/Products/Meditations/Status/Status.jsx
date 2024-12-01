import { useEffect } from 'react';
import styles from './Status.module.scss';
import { meditations } from '@helper/db/meditations';

const buttons = [
  { name: 'Усі', status: 'all' },
  { name: 'Опубліковані', status: 'published' },
  { name: 'Чернетки', status: 'draft' },
  { name: 'Приховані', status: 'hidden' },
];

const Status = ({ activeStatus, setActiveStatus }) => {
  useEffect(() => {
    buttons.reduce((acc, button) => {
      if (button.status === 'all') {
        button.count = meditations.length;
        acc.push(button);
        return acc;
      }
      const countOfStatus = meditations.filter(el => button.status === el.status).length;
      button.count = countOfStatus;
      acc.push(button);
      return acc;
    }, []);
  }, []);

  return (
    <ul className={styles.list}>
      {buttons.map(({ name, status, count }) => (
        <li key={status} className={styles.item}>
          <button
            className={`${styles.button} ${status === activeStatus ? styles.button_active : ''}`}
            onClick={() => setActiveStatus(status)}
          >
            {name} <span>({count})</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Status;

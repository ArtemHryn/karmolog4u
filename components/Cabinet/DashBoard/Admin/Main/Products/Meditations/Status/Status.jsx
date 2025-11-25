import { useEffect, useState } from 'react';
import styles from './Status.module.scss';
import AddProductButton from '../../AddProductButton/AddProductButton';
import { DRAFT, HIDDEN, PUBLISHED } from '@/helper/consts';

const buttons = [
  { name: 'Усі', status: 'all' },
  { name: 'Опубліковані', status: PUBLISHED },
  { name: 'Чернетки', status: DRAFT },
  { name: 'Приховані', status: HIDDEN },
];

const Status = ({ activeStatus, setActiveStatus, products }) => {
  const [updatedButtons, setUpdatedButtons] = useState([]);
  useEffect(() => {
    if (!products) return;
    const buttonsWithCount = buttons.map(button => {
      if (button.status === 'all') {
        return { ...button, count: products.length };
      }
      const countOfStatus = products.filter(el => button.status === el.status).length;
      return { ...button, count: countOfStatus };
    });

    setUpdatedButtons(buttonsWithCount);
  }, [products]);

  if (updatedButtons.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {updatedButtons.map(({ name, status, count }) => (
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
      <div className={styles.button_wrapper}>
        <AddProductButton />
      </div>
    </div>
  );
};

export default Status;

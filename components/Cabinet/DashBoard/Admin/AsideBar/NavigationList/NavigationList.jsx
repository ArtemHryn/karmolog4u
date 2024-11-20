import Link from 'next/link';

import styles from './NavigationList.module.scss';

const list = [
  { link: 'products', name: 'Авторські продукти' },
  { link: 'education', name: 'Навчання' },
  { link: 'promocode', name: 'Промокод' },
  { link: 'accounts', name: 'Користувачі' },
];

const NavigationList = () => {
  return (
    <ul className={styles.list}>
      {list.map(({ link, name }, index) => (
        <li key={index} className={styles.list_item}>
          <Link href={link}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationList;

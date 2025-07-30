'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Achievement from './Icons/Achievement';
import Education from './Icons/Education';
import Personal from './Icons/Personal';
import Support from './Icons/Support';
import styles from './Navigation.module.scss';

const navList = [
  { name: 'Мої досягнення', icon: Achievement, link: '/cabinet/dashboard/user/achievement' },
  { name: 'Навчання', icon: Education, link: '/cabinet/dashboard/user/education' },
  { name: 'Особисті дані', icon: Personal, link: '/cabinet/dashboard/user/personal' },
  { name: 'Відділ турботи', icon: Support, link: '/cabinet/dashboard/user/support' },
];

const Navigation = () => {
  const pathName = usePathname();

  return (
    <ul className={styles.list}>
      {navList.map(({ name, icon: Icon, link }) => (
        <li key={link}>
          <Link
            href={link}
            className={`${styles.link} ${pathName.includes(link) ? styles.link_active : ''}`}
          >
            <Icon styled={styles.icon} /> {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;

'use client';

import { usePathname } from 'next/navigation';

import styles from './CourseHeader.module.scss';
import Link from 'next/link';
import AccountInfo from '../../UserInfo/Header/AccountInfo/AccountInfo';
import Logo from '../../../../Authentication/FormHeader/Logo';

const CourseHeader = () => {
  const pathName = usePathname();

  const sections = {
    ssk: { style: styles.ssk, title: 'САМ СОБІ КАРМОЛОГ' },
    advanced: { style: styles.advanced, title: 'ADVANCED' },
    consulting: { style: styles.consulting, title: 'CONSULTING' },
  };

  const activeSection = Object.keys(sections).find(key => pathName.includes(key));

  const header = [styles.header, activeSection ? sections[activeSection].style : null]
    .filter(Boolean)
    .join(' ');

  const greeting = activeSection ? sections[activeSection].title : 'Курс';

  return (
    <header className={header}>
      <div className={styles.logo_wrapper}>
        <Link href={'#'} className={styles.logo_link}>
          <Logo />
        </Link>
        <AccountInfo showOnMobile />
      </div>
      <div className={styles.greeting_wrapper}>
        <p>{greeting}</p>
        <p>Курс дійсний до</p>
      </div>
    </header>
  );
};

export default CourseHeader;

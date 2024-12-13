'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from './AddProductButton.module.scss';

const AddProductButton = () => {
  const pathname = usePathname();
  return (
    <Link href={`${pathname}/add`} className={styles.link}>
      <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
        <path d="M7 5V0H5V5H0V7H5V12H7V7H12V5H7Z" />
      </svg>
      Створити публікацію
    </Link>
  );
};

export default AddProductButton;

import Link from "next/link";

import styles from './AddProductButton.module.scss'

const AddProductButton = () => {
  return (
    <Link href={'#'} className={styles.link}>
      <svg
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.icon}
      >
        <path d="M7 5V0H5V5H0V7H5V12H7V7H12V5H7Z" />
      </svg>
      Створити публікацію
    </Link>
  );
};

export default AddProductButton;

import styles from './Header.module.scss';

const Burger = () => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.burger}
    >
      <g clipPath="url(#clip0_5394_10696)">
        <path d="M20 3.3335H0V5.00016H20V3.3335Z" fill="#7E7E7E" />
        <path d="M20 7.5H0V9.16666H20V7.5Z" fill="#7E7E7E" />
        <path d="M20 15.8335H0V17.5002H20V15.8335Z" fill="#7E7E7E" />
        <path d="M20 11.667H0V13.3337H20V11.667Z" fill="#7E7E7E" />
      </g>
      <defs>
        <clipPath id="clip0_5394_10696">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Burger;

import Image from 'next/image';

import styles from './AvailableCourses.module.scss';
import Link from 'next/link';

const Card = ({ course }) => {
  const { name, mobImg, tableImg, about, link } = course;
  return (
    <div className={styles.slide}>
      <picture className={styles.image}>
        <source srcSet={tableImg} media="(min-width: 768px)" />
        <Image src={mobImg} width={280} height={183} alt={name} className={styles.image} />
      </picture>
      <div className={styles.text_wrapper}>
        <Link className={styles.name} href={link} target="_blank" rel="noopener noreferrer">
          {name}
        </Link>
        <ul className={styles.list}>
          {about.map((item, index) => (
            <li key={index}>
              <p className={styles.text}>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;

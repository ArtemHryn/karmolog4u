import Instagram from '@components/Common/SocialIcons/Instagram';
import Image from 'next/image';
import styles from './StarCustomers.module.scss';

function Card({ item }) {
  return (
    <div className={`${styles.card}`}>
      <Image
        src={item.image}
        alt={item.owner}
        width={240}
        height={278}
        className={styles.image}
        priority={true}
      />
      <div className={styles.info_wrap}>
        <a className={styles.link} href={item.link} target="_blank" rel="noreferrer noopener">
          <Instagram styled={styles.icon} />
          <p>{item.owner}</p>
        </a>
        <p className={styles.text}>{item.feedback}</p>
      </div>
    </div>
  );
}

export default Card;

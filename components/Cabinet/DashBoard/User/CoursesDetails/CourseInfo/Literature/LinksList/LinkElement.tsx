import Link from 'next/link';
import { BonusLinkItem } from '@/types/cons_adv_courses';

import styles from './LinksList.module.scss';

interface LinkElementProps {
  link: BonusLinkItem;
  i: number;
}

const LinkElement = ({ link, i }: LinkElementProps) => {
  const text = link.name || link.author || '';
  const parts = text.split('+').map(part => part.trim());
  return (
    <li className={styles.element}>
      <p className={styles.text}>{i + 1}.</p>
      {parts.length === 1 ? (
        <Link
          href={link.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${styles.text} ${styles.link}`}
        >
          {parts[0]}
        </Link>
      ) : (
        <div className={styles.text_wrapper}>
          <p className={styles.text}>{parts[0]}</p>
          <Link
            href={link.link}
            target="_blank"
            rel="noreferrer noopener"
            className={`${styles.text} ${styles.link}`}
          >
            {parts[1]}
          </Link>
        </div>
      )}
    </li>
  );
};

export default LinkElement;

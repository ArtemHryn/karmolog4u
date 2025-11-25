import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import Link from 'next/link';
import styles from './AdditionalLinks.module.scss';

interface AdditionalLinksProps {
  list: { name: string; link: string }[];
}

const AdditionalLinks = ({ list }: AdditionalLinksProps) => {
  return (
    <div className={styles.wrapper}>
      <TitleNoStyles variant="h2" styled={styles.title}>
        ДОДАКОВІ ПОСИЛАННЯ:
      </TitleNoStyles>
      <ul className={styles.list}>
        {list.map((l, i) => (
          <li key={i} className={styles.item}>
            <Link href={l.link} className={styles.link} target="_blank" rel="noopener noreferrer">
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdditionalLinks;

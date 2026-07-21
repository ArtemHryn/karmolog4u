import { ReactNode } from 'react';
import TitleNoStyles from '../Common/TitleNoStyles/TitleNoStyles';

import styles from './Section.module.scss';

interface SectionProps {
  clause: {
    title: string;
    list: ReactNode[];
  };
}

const Section = ({ clause }: SectionProps) => {
  return (
    <div className={styles.wrapper}>
      <TitleNoStyles variant="h2" styled={styles.title}>
        {clause.title}
      </TitleNoStyles>
      <ul className={styles.list}>
        {clause.list.map((c, i) => (
          <li key={i}>
            <p className={styles.text}>{c}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Section;

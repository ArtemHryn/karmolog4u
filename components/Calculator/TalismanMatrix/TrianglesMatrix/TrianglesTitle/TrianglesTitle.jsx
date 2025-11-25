import { useLocale } from 'next-intl';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import { titleList } from '@/helper/calculator/triangles';

import styles from './TrianglesTitle.module.scss';

const TrianglesTitle = ({ activeTriangle }) => {
  const locale = useLocale();
  const { title, description } = titleList[activeTriangle];

  return (
    <div className={styles.wrapper}>
      <TitleNoStyles styled={styles.title} variant="h3">
        {title[locale]}
      </TitleNoStyles>
      <ul className={styles.list}>
        {description[locale].map(desc => (
          <li key={desc}>
            <p className={styles.text}>{desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrianglesTitle;

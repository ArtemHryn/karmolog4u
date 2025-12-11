import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import { BonusLinkItem } from '@/types/cons_adv_courses';
import LinkElement from './LinkElement';

import styles from './LinksList.module.scss';

interface LinksList {
  list: BonusLinkItem[];
  title: string;
}

const LinksList = ({ list, title }: LinksList) => {
  if (list?.length === 0) return null;
  return (
    <div className={styles.wrapper}>
      <TitleNoStyles styled={styles.title} variant="h3">
        {title}
      </TitleNoStyles>
      <ul className={styles.list}>
        {list.map((el, i) => (
          <LinkElement i={i} link={el} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default LinksList;

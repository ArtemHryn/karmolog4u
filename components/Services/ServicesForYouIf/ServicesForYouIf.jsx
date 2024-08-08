import Container from '../../Common/Container/Container';
import Title from '@components/Common/Title/Title';

import styles from './ServicesForYouIf.module.scss';
import { useLocale } from 'next-intl';

const ServicesForYouIf = ({ title, listOfReasons }) => {
  const locale = useLocale();
  return (
    <Container>
      <Title variant='h2' styled={`${styles.title}`}>{typeof title === 'string' ? title : title[locale]}</Title>
      <ul className={styles.reasons_list}>
        {listOfReasons.map(({ text, icon: Icon }) => (
          <li key={text} className={styles.reason_list_item}>
            <span className={styles.icon_wrapper}>
              <Icon styled={styles.icon} />
            </span>
            <p className={styles.text}>{typeof text === 'string' ? text : text[locale]}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ServicesForYouIf;

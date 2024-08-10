import { useLocale, useTranslations } from 'next-intl';
import HeroNav from '../HeroNav/HeroNav';
import Title from '../Title/Title';

import styles from './InternalNavTitle.module.scss';

const InternalNavTitle = ({ title, links }) => {
  const locale = useLocale();
  const t = useTranslations('Common.offline_meetings');
  return (
    <>
      <HeroNav linkNames={links} />
      <Title styled={styles.title}>{title[locale]}</Title>
      <Title variant="p" styled={`${styles.studio}`}>
        <span className={styles.studio_line} /> {t('studio')}
        <span className={styles.studio_line} />
      </Title>
    </>
  );
};

export default InternalNavTitle;

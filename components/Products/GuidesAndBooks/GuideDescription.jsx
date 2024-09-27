import { useTranslations } from 'next-intl';
import styles from './GuidesAndBooks.module.scss';

const GuideDescription = () => {
  const t = useTranslations('Author_products.guides_and_books.guide_desc');
  return (
    <p className={styles.about_guides}>
      {t('part1')} <span>{t('part2')}</span>
    </p>
  );
};

export default GuideDescription;

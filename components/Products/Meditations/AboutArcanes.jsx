import { useTranslations } from 'next-intl';
import styles from './Meditations.module.scss';

const AboutArcanes = () => {
  const t = useTranslations('Author_products.meditations.about_arcanes');
  return (
    <>
      <p className={styles.about_arcanes}>{t('text1')}</p>
      <p
        className={styles.about_arcanes_second}
        dangerouslySetInnerHTML={{ __html: t.raw('text2') }}
      />
    </>
  );
};

export default AboutArcanes;

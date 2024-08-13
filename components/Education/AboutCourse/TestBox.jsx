import Link from 'next/link';
import styles from './AboutCourse.module.scss';
import { useTranslations } from 'next-intl';

const TestBox = () => {
  const t = useTranslations('Education.karmologist_himself.about_course');
  return (
    <div className={styles.test_box}>
      <p className={styles.test_text} dangerouslySetInnerHTML={{ __html: t.raw('test_text') }} />

      <Link
        href={
          'https://docs.google.com/forms/d/1qRtHMICgCFpNXQYMUOzgOy-UcgFZvDSelZ6Fc6jOA1s/viewform?edit_requested=true'
        }
        target="_blank"
        rel="noreferrer noopener"
        className={styles.test_btn}
      >
        {t('get_test')}
      </Link>
    </div>
  );
};

export default TestBox;

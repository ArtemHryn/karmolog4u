import { useLocale, useTranslations } from 'next-intl';
import Container from '@components/Common/Container/Container';
import Title from '@components/Common/Title/Title';
import { unbounded } from '@app/[locale]/layout';

import styles from './AboutPractice.module.scss';

const AboutPractice = ({ practiceSteps, showResult, title }) => {
  const locale = useLocale();
  const t = useTranslations('Services.offline_meetings.nailing.about_practice');
  const renderPracticeSteps = Array.isArray(practiceSteps) ? practiceSteps : practiceSteps[locale];
  return (
    <Container>
      <Title styled={styles.title}>{title[locale]}</Title>
      <ul className={`${styles.list} ${styles.list_first}`}>
        {renderPracticeSteps.map((step, index) => (
          <li key={index} className={styles.list_item}>
            <span className={`${styles.index} ${unbounded.className}`}>{index + 1}</span>
            <p dangerouslySetInnerHTML={{ __html: step }} className={styles.step_text} />
          </li>
        ))}
      </ul>
      {showResult && (
        <ul className={styles.list}>
          <li className={`${styles.list_item} ${styles.list_item_result}`}>
            <p className={`${styles.step_text_title} ${unbounded.className}`}>{t('result')}:</p>
            <p>{t('about_result1')}</p>
          </li>
          <li className={`${styles.list_item} ${styles.list_item_result}`}>
            <p className={`${styles.step_text_title} ${unbounded.className}`}>300+</p>
            <p>{t('about_result2')}</p>
          </li>
        </ul>
      )}
    </Container>
  );
};

export default AboutPractice;

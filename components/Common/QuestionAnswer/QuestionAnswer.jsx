import Container from '@components/Common/Container/Container';
import React from 'react';
import Dropdown from './Dropdown';
import { unbounded } from '@app/[locale]//layout';
import styles from './QuestionAnswer.module.scss';
import { useLocale, useTranslations } from 'next-intl';

function QuestionAnswer({ column1, column2, main }) {
  const t = useTranslations('Common.QuestionAnster');
  const locale = useLocale();
  const checkedColumn1 = Array.isArray(column1) ? column1 : column1[locale];
  const checkedColumn2 = Array.isArray(column2) ? column2 : column2[locale];
  return (
    <Container>
      <h2 className={`${main ? styles.main_title : styles.title} ${unbounded.className}`}>
        {t('title')}
      </h2>
      <div className={styles.wrap}>
        <ul className={styles.list}>
          {checkedColumn1.map(({ q, a }, index) => (
            <li key={index} className={styles.list_item}>
              <Dropdown q={q} a={a} />
            </li>
          ))}
        </ul>
        <ul className={styles.list}>
          {checkedColumn2.map(({ q, a }, index) => (
            <li key={index} className={styles.list_item}>
              <Dropdown q={q} a={a} />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default QuestionAnswer;

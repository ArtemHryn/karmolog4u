import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { unbounded } from '@/app/[locale]//layout';
import Container from '@/components/Common/Container/Container';
import Arrow from './Arrow';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import ArrowTab from './ArrowTab';
import ButtonsList from './ButtonsList';

import styles from './MoreCalculators.module.scss';

const MoreCalculators = ({ date, name }) => {
  const [showButtons, setShowButtons] = useState(false);
  const t = useTranslations('Calculator.More');
  return (
    <Container styledSection={styles.section}>
      <button
        className={`${styles.show_list_btn} ${unbounded.className} ${
          showButtons ? '' : styles.show_list_btn_opened
        }`}
        onClick={() => setShowButtons(prev => !prev)}
      >
        {t('more_calculators')}
        <span className={styles.icon_wrapper}>
          <Arrow styled={`${styles.icon} ${showButtons ? styles.icon_active : ''}`} />
          <ArrowTab styled={`${styles.icon_tab} ${showButtons ? styles.icon_tab_active : ''}`} />
        </span>
      </button>
      <div className={`${showButtons ? styles.active_part : styles.active_part_hide}`}>
        <TitleNoStyles variant="h3" styled={styles.title}>
          {t('what_matrix')}
        </TitleNoStyles>
        <ButtonsList date={date} name={name} />
        <h2 className={styles.notification}>{t('about_calc')}</h2>
      </div>
    </Container>
  );
};

export default MoreCalculators;

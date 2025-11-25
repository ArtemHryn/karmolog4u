import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Dropdown } from 'primereact/dropdown';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import KneelingGraph from './KneelingGraph/KneelingGraph';
import { open_Sans } from '@/app/[locale]//layout';

import styles from './KneelingCalc.module.scss';
import './period.scss';

const getPeriods = locale => {
  const periods = [];
  for (let i = 1; i < 10; i++) {
    periods.push({ knee: `${i} ${locale === 'uk' ? 'коліно' : 'колено'}`, id: i });
  }

  return periods;
};

const getDefaultValue = locale => {
  return locale !== 'uk' ? { knee: `1 колено`, id: 1 } : { knee: `1 коліно`, id: 1 };
};

const KneelingCalc = ({ kneeling }) => {
  const t = useTranslations('Calculator.nine_tribes');
  const locale = useLocale();
  const [periodEl, setPeriodEl] = useState(getDefaultValue(locale));

  return (
    <>
      <TitleNoStyles styled={styles.title} variant="h2">
        {t('kneeling_calc_title')}
      </TitleNoStyles>
      <div className={styles.selector_wrapper}>
        <p className={styles.selector_text}>{t('choose_knee')}</p>
        <Dropdown
          value={periodEl}
          onChange={e => setPeriodEl(e.value)}
          options={getPeriods(locale)}
          optionLabel="knee"
        />
      </div>
      <KneelingGraph period={kneeling[periodEl.id - 1]} />
      <div className={styles.chamoline_wrapper}>
        <TitleNoStyles variant="h3" styled={styles.chamoline_title}>
          {t('chamomile')}
        </TitleNoStyles>
        <Link
          href={'/assets/chamoline_template.pdf'}
          target="_blank"
          download
          className={`${styles.download_btn} ${open_Sans.className}`}
        >
          {t('download_chamomile_template')}
        </Link>
      </div>
    </>
  );
};

export default KneelingCalc;

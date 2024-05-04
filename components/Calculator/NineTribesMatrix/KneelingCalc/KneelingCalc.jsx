import { useState } from 'react';
import Link from 'next/link';
import { Dropdown } from 'primereact/dropdown';
import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import KneelingGraph from './KneelingGraph/KneelingGraph';
import { open_Sans } from '@app/layout';

import styles from './KneelingCalc.module.scss';
import './period.scss';

const getPeriods = () => {
  const periods = [];

  for (let i = 1; i < 10; i++) {
    periods.push({ knee: `${i} коліно`, id: i });
  }

  return periods;
};

const KneelingCalc = ({ kneeling }) => {
  const [periodEl, setPeriodEl] = useState({ knee: `1 коліно`, id: 1 });

  return (
    <>
      <TitleNoStyles styled={styles.title} variant="h2">
        Розрахунок матриці колінопоклоніння
      </TitleNoStyles>
      <div className={styles.selector_wrapper}>
        <p className={styles.selector_text}>Виберіть період</p>
        <Dropdown
          value={periodEl}
          onChange={e => setPeriodEl(e.value)}
          options={getPeriods()}
          optionLabel="knee"
          placeholder="Виберіть період"
        />
      </div>
      <KneelingGraph period={kneeling[periodEl.id - 1]} />
      <div className={styles.chamoline_wrapper}>
        <TitleNoStyles variant="h3" styled={styles.chamoline_title}>
          Ромашка обнулення
        </TitleNoStyles>
        <Link
          href={'/assets/chamoline_template.pdf'}
          target="_blank"
          download
          className={`${styles.download_btn} ${open_Sans.className}`}
        >
          Завантажити шаблон ромашки
        </Link>
      </div>
    </>
  );
};

export default KneelingCalc;

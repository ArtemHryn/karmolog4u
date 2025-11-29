'use client';
import { useState } from 'react';
import Link from 'next/link';
import { open_Sans, unbounded } from '@/app/[locale]/layout';

import ActiveDropDown from './ActiveDropDown';
import ToggleArrow from '@/components/Common/Icons/ConsultationsIcons/ToggleArrow';

import styles from './TariffList.module.scss';
import { useLocale, useTranslations } from 'next-intl';
import ShowModalButton from '../../../Common/ShowModalButton/ShowModalButton';

const DropDown = ({ tariff }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Services.consultations.consultations_tariff');
  const locale = useLocale();
  const { title, description, time, price, isPerHour } = tariff;

  return (
    <article className={styles.tariff}>
      <button
        aria-label="Toggle more details"
        onClick={() => setIsOpen(prev => !prev)}
        className={`${styles.toggle_btn} ${isOpen ? styles.toggle_btn_open : ''}`}
      >
        <ToggleArrow styled={styles.icon_arrow} />
      </button>
      <p
        className={`${styles.tariff_title} ${unbounded.className} ${
          isPerHour ? styles.tariff_title_per_hour : ''
        }`}
      >
        {typeof title === 'string' ? title : title[locale]}
      </p>

      <button
        aria-label="Open more details"
        className={`${styles.details_btn} ${open_Sans.className} ${isOpen ? styles.is_hidden : ''}`}
        onClick={() => setIsOpen(true)}
      >
        {t('show_more')}
      </button>

      <div className={styles.wrapper_mob}>
        <ActiveDropDown
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          description={description}
          time={time}
        />
      </div>
      <p className={`${styles.price} ${unbounded.className}`}>
        {price}
        <span>{isPerHour ? `${locale === 'uk' ? '/година' : '/час'}` : ''}</span>
      </p>

      <ShowModalButton
        styles={`${styles.btn} ${open_Sans.className}`}
        wrapperStyles={styles.btn_wrapper}
      />
      <div className={styles.wrapper_tab}>
        <ActiveDropDown
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          description={description}
          time={time}
        />
      </div>
    </article>
  );
};

export default DropDown;

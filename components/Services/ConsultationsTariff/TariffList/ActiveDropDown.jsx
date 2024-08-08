import { useLocale, useTranslations } from 'next-intl';
import AlarmClock from '@components/Common/Icons/ConsultationsIcons/AlarmClock';
import { open_Sans } from '@app/[locale]/layout';

import styles from './TariffList.module.scss';

const ActiveDropDown = ({ isOpen, setIsOpen, description, time }) => {
  const t = useTranslations('Services.consultations.consultations_tariff');
  const locale = useLocale();
  return (
    <div className={`${styles.description_wrapper} ${isOpen ? '' : styles.is_hidden}`}>
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: typeof description === 'string' ? description : description[locale],
        }}
      />
      <p className={styles.time}>
        {isOpen && <AlarmClock styled={styles.icon} />} :{' '}
        {typeof time === 'string' ? time : time[locale]}
      </p>
      <button
        aria-label={t('close')}
        className={`${styles.details_btn} ${open_Sans.className}`}
        onClick={() => setIsOpen(false)}
      >
        {t('close')}
      </button>
    </div>
  );
};

export default ActiveDropDown;

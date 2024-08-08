import Container from '@components/Common/Container/Container';
import TariffList from './TariffList/TariffList';
import Title from '@components/Common/Title/Title';

import styles from './ConsultationsTariff.module.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const ConsultationsTariff = () => {
  const t = useTranslations('Services.consultations.consultations_tariff');
  return (
    <Container>
      <Title styled={`${styles.title}`}>{t('title')}</Title>
      <p className={styles.warning}>
        {t('warning')} <Link href={'#'}>{t('link')}</Link>.
      </p>
      <TariffList />
    </Container>
  );
};

export default ConsultationsTariff;

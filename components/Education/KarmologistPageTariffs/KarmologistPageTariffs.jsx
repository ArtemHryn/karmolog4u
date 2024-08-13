import Container from '@components/Common/Container/Container';
import Title from '@components/Common/Title/Title';
import Slider from './TariffsSlider/Slider';

import styles from './KarmologistPageTariffs.module.scss';
import { useTranslations } from 'next-intl';

const KarmologistPageTariffs = ({ tariffs, warning, link }) => {
  const t = useTranslations('Education.karmologist_himself.karmologist_page_tariff');
  return (
    <Container>
      <Title styled={styles.title}>{t('title')}</Title>
      {warning && <p className={styles.warning}>{warning}</p>}
      <Slider tariffs={tariffs} link={link} />
    </Container>
  );
};

export default KarmologistPageTariffs;

import Container from '@components/Common/Container/Container';
import TariffList from './TariffList/TariffList';
import Title from '@components/Common/Title/Title';

import styles from './ConsultationsTariff.module.scss';

const ConsultationsTariff = () => {
  return (
    <Container>
      <Title styled={`${styles.title}`}>Прайс та оплата</Title>
      <p className={styles.warning}>*Послуги надаються згідно з договором оферти </p>
      <TariffList />
    </Container>
  );
};

export default ConsultationsTariff;

import Container from '@components/Common/Container/Container';
import TariffList from './TariffList/TariffList';
import Title from '@components/Common/Title/Title';

import styles from './ConsultationsTariff.module.scss';
import Link from 'next/link';

const ConsultationsTariff = () => {
  return (
    <Container>
      <Title styled={`${styles.title}`}>Прайс та оплата</Title>
      <p className={styles.warning}>
        *Послуги надаються згідно з <Link href={'#'}>договором оферти</Link>.
      </p>
      <TariffList />
    </Container>
  );
};

export default ConsultationsTariff;

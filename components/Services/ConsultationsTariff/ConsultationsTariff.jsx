import Container from "@components/Common/Container/Container";
import TariffList from "./TariffList/TariffList";

import styles from "./ConsultationsTariff.module.scss";
import { unbounded } from "@app/layout";

const ConsultationsTariff = () => {
  return (
    <Container>
      <h1 className={`${styles.title} ${unbounded.className}`}>
        Тарифи і оплата
      </h1>
      <p className={styles.warning}>
        *Послуги надаються згідно з договором оферти{" "}
      </p>
      <TariffList />
    </Container>
  );
};

export default ConsultationsTariff;

import Container from "@components/Common/Container/Container";
import Title from "@components/Common/Title/Title";
import Slider from "./TariffsSlider/Slider";

import styles from "./KarmologistPageTariffs.module.scss";

const KarmologistPageTariffs = ({ tariffs, warning, link }) => {
  return (
    <Container>
      <Title styled={styles.title}>Тарифи</Title>
      {warning && <p className={styles.warning}>{warning}</p>}
      <Slider tariffs={tariffs} link={link} />
    </Container>
  );
};

export default KarmologistPageTariffs;

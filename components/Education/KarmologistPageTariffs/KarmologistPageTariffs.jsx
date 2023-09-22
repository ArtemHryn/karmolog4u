import Container from "@components/Common/Container/Container";
import Title from "@components/Common/Title/Title";
import Slider from "./TariffsSlider/Slider";

import styles from "./KarmologistPageTariffs.module.scss";

const KarmologistPageTariffs = () => {
  return (
    <Container>
      <Title styled={styles.title}>Тарифи</Title>
      <Slider />
    </Container>
  );
};

export default KarmologistPageTariffs;

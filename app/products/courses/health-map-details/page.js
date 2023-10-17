import WhatIsWaitingForYou from "@components/Education/WhatIsWaitingForYou/WhatIsWaitingForYou";
import HealthMapHero from "@components/Products/Courses/HealtMapDetails/HealthMapHero/HealthMapHero";
import { cards } from "@helper/products/healthMapWhatIsWaiting";

import styles from "@components/Products/Courses/HealtMapDetails/HealthMap.module.scss";
import Feedbacks from "@components/Services/Feedbacks/Feedbacks";
import { getHealthMapFeedbacks } from "@helper/products/healthMapFeedbacks";
import KarmologistPageTariffs from "@components/Education/KarmologistPageTariffs/KarmologistPageTariffs";
import getTariffs from "@helper/products/healthMapTariffsList";

const page = () => {
  return (
    <>
      <HealthMapHero />
      <WhatIsWaitingForYou cards={cards} column1Style={styles.column1} />
      <KarmologistPageTariffs
        tariffs={getTariffs()}
        warning={
          "*Для учнів студії на постійній основі діє знижка -33% на всі тарифи"
        }
        link={"health-map-details/dialog"}
      />
      <Feedbacks feedbacks={getHealthMapFeedbacks()} />
    </>
  );
};

export default page;

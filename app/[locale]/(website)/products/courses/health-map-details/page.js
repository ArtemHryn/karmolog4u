import { useTranslations } from 'next-intl';
import WhatIsWaitingForYou from '@components/Education/WhatIsWaitingForYou/WhatIsWaitingForYou';
import HealthMapHero from '@components/Products/Courses/HealtMapDetails/HealthMapHero/HealthMapHero';
import { cards } from '@helper/products/healthMapWhatIsWaiting';

import styles from '@components/Products/Courses/HealtMapDetails/HealthMap.module.scss';
import Feedbacks from '@components/Services/Feedbacks/Feedbacks';
import { getHealthMapFeedbacks } from '@helper/products/healthMapFeedbacks';
import KarmologistPageTariffs from '@components/Education/KarmologistPageTariffs/KarmologistPageTariffs';
import getTariffs from '@helper/products/healthMapTariffsList';

const HealthMapPage = () => {
  const t = useTranslations('Author_products.courses.health_map.tariffs');
  return (
    <>
      <HealthMapHero />
      <WhatIsWaitingForYou cards={cards} column1Style={styles.column1} />
      <KarmologistPageTariffs
        tariffs={getTariffs()}
        warning={t('warning')}
        link={'health-map-details/dialog'}
      />
      <Feedbacks feedbacks={getHealthMapFeedbacks()} />
    </>
  );
};

export default HealthMapPage;

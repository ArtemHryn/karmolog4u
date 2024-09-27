import useLocalizedValue from '@hooks/useLocalizedValue';
import GiftDetailsTitle from './GiftDetailsTitle';

import styles from './GiftsDetails.module.scss';
import WhatIsInside from './Descriptions/WhatIsInside';
import Text from './Descriptions/Text';
import HowToOrder from './Descriptions/HowToOrder';
import HowItLooks from './Descriptions/HowItLooks';

const GiftDetailsText = ({ card }) => {
  const { desc } = card;
  const localizedText = useLocalizedValue(desc.text);
  return (
    <div>
      <GiftDetailsTitle card={card} />
      {desc?.text && <Text text={localizedText} />}
      <div className={styles.total_list_wrapper}>
        {/* список того що всередині */}
        {desc?.whatIsInside && <WhatIsInside whatIsInside={desc.whatIsInside} />}
        {/* список того як виглядає подарунок */}

        {desc?.howItLooks && <HowItLooks howItLooks={desc.howItLooks} />}
        {desc?.howToOrder && <HowToOrder howToOrder={desc.howToOrder} />}
      </div>
    </div>
  );
};

export default GiftDetailsText;

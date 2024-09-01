import MeditationText from './MeditationText';
import MeditationImage from './MeditationImage';
import useLocalizedValue from '@hooks/useLocalizedValue';

import styles from './MeditationsDescriptions.module.scss';

const MeditationsDescriptions = ({ meditation }) => {
  const { descVideo, img, name, desc, price, category } = meditation;
  const localizedName = useLocalizedValue(name);

  return (
    <div className={styles.wrapper}>
      <MeditationImage descVideo={descVideo} img={img} name={localizedName} />
      <MeditationText
        name={localizedName}
        desc={desc}
        price={price}
        category={category}
        img={img}
      />
    </div>
  );
};

export default MeditationsDescriptions;

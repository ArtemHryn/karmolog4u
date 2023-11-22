import MeditationText from "./MeditationText";
import MeditationImage from "./MeditationImage";

import styles from "./MeditationsDescriptions.module.scss";

const MeditationsDescriptions = ({ meditation }) => {
  const { descVideo, img, name, desc, price, category } = meditation;
  return (
    <div className={styles.wrapper}>
      <MeditationImage descVideo={descVideo} img={img} name={name} />
      <MeditationText
        name={name}
        desc={desc}
        price={price}
        category={category}
        img={img}
      />
    </div>
  );
};

export default MeditationsDescriptions;

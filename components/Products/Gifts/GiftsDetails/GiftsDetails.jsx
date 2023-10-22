import Image from "next/image";
import styles from "./GiftsDetails.module.scss";
import GiftDetailsText from "./GiftDetailsText";

const GiftsDetails = ({ gift }) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={gift.img}
        alt={gift.name}
        width={736}
        height={462}
        quality={100}
        priority={true}
      />
      <GiftDetailsText card={gift} />
    </div>
  );
};

export default GiftsDetails;

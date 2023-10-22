import Image from "next/image";
import YouTube from "react-youtube";

import styles from "./MeditationsDescriptions.module.scss";

const MeditationImage = ({ descVideo, img, name }) => {
  return (
    <>
      {descVideo ? (
        <YouTube videoId={descVideo} iframeClassName={styles.video} />
      ) : (
        <Image
          src={img}
          alt={name}
          width={736}
          height={462}
          quality={100}
          priority={true}
        />
      )}
    </>
  );
};

export default MeditationImage;

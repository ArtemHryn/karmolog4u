import Image from 'next/image';
import Youtube from 'react-youtube';
import Logo from '@/components/Common/Icons/Logo';

import styles from './MeditationImage.module.scss';
import { useState } from 'react';

interface MeditationImageProps {
  video: string;
  cover: string;
}

const MeditationImage = ({ video, cover }: MeditationImageProps) => {
  const [error, setError] = useState(false);
  if ((!video && !cover) || error) {
    return (
      <div className={styles.no_image}>
        <Logo styled={styles.logo} />
      </div>
    );
  }

  return (
    <div>
      {video ? (
        <Youtube videoId={video} iframeClassName={styles.video} />
      ) : (
        <Image
          src={cover}
          alt="Meditation cover"
          width={736}
          height={462}
          className={styles.video}
          onError={() => setError(true)}
          unoptimized
        />
      )}
    </div>
  );
};

export default MeditationImage;

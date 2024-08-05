'use client';
import { useState } from 'react';
// import YouTube from "react-youtube";

import styles from './VideoButton.module.scss';
import { open_Sans } from '@app/[locale]/layout';
import { useTranslations } from 'next-intl';

const VideoButton = () => {
  const [showVideo, setShowVideo] = useState(false);
  const t = useTranslations('Main.Hero');
  return (
    <>
      <button
        type="button"
        className={`${styles.button} ${open_Sans.className}`}
        onClick={() => setShowVideo(true)}
      >
        {t('button')}
      </button>

      {showVideo && (
        <div>
          {/* <YouTube
            videoId="iHLkvH5_MYM"
            opts={{ height: "350", width: "300" }}
          /> */}
        </div>
      )}
    </>
  );
};

export default VideoButton;

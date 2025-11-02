import YouTube from 'react-youtube';

import styles from './VideoFrame.module.scss';

const VideoFrame = ({ videoId }: { videoId: string }) => {
  return (
    <>
      <YouTube videoId={videoId} iframeClassName={styles.frame} className={styles.wrapper} />
    </>
  );
};

export default VideoFrame;

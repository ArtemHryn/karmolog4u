import { useState } from 'react';
import ButtonsList from './ButtonsList/ButtonsList';
import { LessonVideosProps } from '@/types/ssk_course';

import styles from './LessonVideos.module.scss';
import VideoFrame from './VideoFrame/VideoFrame';
import VideoNavigation from './VideoNavigation/VideoNavigation';

const LessonVideos = ({ videoLinks }: { videoLinks: LessonVideosProps[] }) => {
  const getYoutubeVideoId = (link: string) => {
    try {
      const url = new URL(link);

      // allowed Youtube domains
      const isYouTube = url.hostname === 'youtu.be' || url.hostname.endsWith('youtube.com');

      if (!isYouTube) return null;

      // 1. watch?v=
      const v = url.searchParams.get('v');
      if (v) return v;

      // 2. youtu.be/ID
      if (url.hostname === 'youtu.be') {
        return url.pathname.slice(1);
      }

      // 3. /embed/ID, /shorts/ID, /v/ID
      const match = url.pathname.match(/^\/(embed|shorts|v)\/([^/?]+)/);

      if (match) return match[2];

      return null;
    } catch (error) {
      return null;
    }
  };
  const buttonsList = videoLinks
    .map(({ name, link }) => {
      const videoId = getYoutubeVideoId(link);
      return videoId ? { name, link: videoId } : null;
    })
    .filter((item): item is LessonVideosProps => item !== null);

  const [currentVideo, setCurrentVideo] = useState(buttonsList[0] || null);

  if (!currentVideo) {
    return <p style={{ color: '#fdfdfd' }}>Відео до цього уроку відсутні</p>;
  }

  return (
    <div className={styles.wrapper}>
      <ButtonsList
        buttonsList={buttonsList}
        setCurrentVideo={setCurrentVideo}
        currentVideo={currentVideo}
      />
      <VideoFrame videoId={currentVideo.link} />
      <VideoNavigation
        currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo}
        list={buttonsList}
      />
    </div>
  );
};

export default LessonVideos;

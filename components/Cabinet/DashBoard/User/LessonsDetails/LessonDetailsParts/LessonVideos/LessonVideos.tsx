import { useState } from 'react';
import ButtonsList from './ButtonsList/ButtonsList';
import { LessonVideosProps } from '@/types/ssk_course';

import styles from './LessonVideos.module.scss';
import VideoFrame from './VideoFrame/VideoFrame';
import VideoNavigation from './VideoNavigation/VideoNavigation';

const LessonVideos = ({ videoLinks }: { videoLinks: LessonVideosProps[] }) => {
  const buttonsList = videoLinks
    .map(({ name, link }) => {
      const videoId = new URL(link).searchParams.get('v');
      return videoId ? { name, link: videoId } : null;
    })
    .filter((item): item is LessonVideosProps => item !== null);

  const [currentVideo, setCurrentVideo] = useState(buttonsList[0] || null);

  if (!currentVideo) {
    return <p>Відео до цього уроку відсутні</p>;
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

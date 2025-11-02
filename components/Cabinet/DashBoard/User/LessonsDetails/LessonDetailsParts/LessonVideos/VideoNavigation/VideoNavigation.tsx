import { LessonVideosProps } from '@/types/ssk_course';

import styles from './VideoNavigation.module.scss';

interface VideoNavigationProps {
  currentVideo: LessonVideosProps;
  setCurrentVideo: (video: LessonVideosProps) => void;
  list: LessonVideosProps[];
}
const VideoNavigation = ({ currentVideo, setCurrentVideo, list }: VideoNavigationProps) => {
  const currentIndex = list.findIndex(video => video.link === currentVideo.link);

  const Button = ({ set, disable }: { set: number; disable: boolean }) => (
    <button
      type="button"
      disabled={disable}
      onClick={() => setCurrentVideo(list[set])}
      className={styles.nav_button}
    >
      <svg viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.999495 13.9998C0.773495 13.9998 0.546495 13.9238 0.359495 13.7678C-0.0645046 13.4148 -0.121505 12.7838 0.231495 12.3598L4.7075 6.98883L0.392495 1.62683C0.0464955 1.19683 0.114495 0.566829 0.544495 0.220829C0.975495 -0.125171 1.6045 -0.0571711 1.9515 0.372829L6.7795 6.37283C7.0775 6.74383 7.0735 7.27383 6.7685 7.63983L1.7685 13.6398C1.5705 13.8768 1.2865 13.9998 0.999495 13.9998Z"
        />
      </svg>
    </button>
  );

  return (
    <div className={styles.wrapper}>
      <Button set={currentIndex - 1} disable={currentIndex === 0} />
      <p className={styles.name}>{currentVideo.name}</p>
      <Button set={currentIndex + 1} disable={currentIndex === list.length - 1} />
    </div>
  );
};

export default VideoNavigation;

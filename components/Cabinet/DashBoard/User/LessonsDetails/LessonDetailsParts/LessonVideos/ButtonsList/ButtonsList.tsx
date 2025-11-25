import { LessonVideosProps } from '@/types/ssk_course';

import styles from './ButtonsList.module.scss';
import { open_Sans } from '@/app/[locale]/layout';

interface ButtonsListProps {
  buttonsList: LessonVideosProps[];
  currentVideo: LessonVideosProps;
  setCurrentVideo: (video: LessonVideosProps) => void;
}

const ButtonsList = ({ buttonsList, setCurrentVideo, currentVideo }: ButtonsListProps) => {
  return (
    <ul className={styles.buttons_list}>
      {buttonsList.map((button, index) => (
        <li key={index}>
          <button
            onClick={() => setCurrentVideo(button)}
            className={`${styles.button} ${open_Sans.className} ${
              currentVideo.link === button.link ? styles.button_active : ''
            }`}
          >
            {button.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ButtonsList;

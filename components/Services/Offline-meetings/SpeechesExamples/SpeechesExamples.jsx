import Container from '@components/Common/Container/Container';
import Title from '@components/Common/Title/Title';
import Video from '../HowIsGoingNailing/Video';
import SeeMoreOnMyYouTube from '@components/Common/SeeMoreOnMyYouTube/SeeMoreOnMyYouTube';

import styles from './SpeechesExamples.module.scss';
import { useLocale, useTranslations } from 'next-intl';

const examples = [
  {
    videoId: 'BhmkDrlU8Cs?si=6hjwrji_nJJML6xD',
    title: { uk: 'Жінка очима чоловіка', ru: 'Женщина глазами мужчины' },
  },
  {
    videoId: 'z4mgRLcsv48?si=u97Dki9z1u-LqQz3',
    title: {
      uk: 'Сила роду , карма батьків, як змінити долю',
      ru: 'Сила рода, карма родителей, как изменить судьбу',
    },
  },
  {
    videoId: 'EBqm4_GGeV8?si=3h6VUk-1v-xZcF6V',
    title: {
      uk: 'Карма та доля людини . Що можна дізнатися за допомогою матриці?',
      ru: 'Карма и судьба человека. Что можно узнать с помощью матрицы?',
    },
  },

  {
    videoId: 'K-Rhc_dFkzY?si=ImYFol8_L8JVYHqS',
    title: {
      uk: 'Любов до себе та взаємозвʼязок з навколишнім світом',
      ru: 'Любовь к себе и взаимосвязь с окружающим миром и окружающим миром',
    },
  },
  {
    videoId: 'QQUWJRoNQa4?si=UdqLY2ruOCNwOBQQ',
    title: { uk: 'Як визначити справжні бажання?', ru: 'Как определить истинные желания?' },
  },
];

const SpeechesExamples = () => {
  const t = useTranslations('Services.offline_meetings.public_speeches.speeches_examples');
  const locale = useLocale();
  return (
    <Container styled={styles.container}>
      <Title variant="h2" styled={styles.title_mob}>
        {t('small_devices_title')}
      </Title>
      <Title variant="h2" styled={styles.title}>
        {t('title')}
      </Title>
      <ul className={styles.video_list}>
        {examples.map((example, index) => (
          <li key={index}>
            <Title styled={styles.video_title} variant="p">
              {example.title[locale]}
            </Title>
            <Video id={example.videoId} />
          </li>
        ))}
        <li>
          <SeeMoreOnMyYouTube />
        </li>
      </ul>
    </Container>
  );
};

export default SpeechesExamples;

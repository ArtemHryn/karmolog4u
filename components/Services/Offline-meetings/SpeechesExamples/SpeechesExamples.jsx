import Container from "@components/Common/Container/Container";
import Title from "@components/Common/Title/Title";
import Video from "../HowIsGoingNailing/Video";
import SeeMoreOnMyYouTube from "@components/Common/SeeMoreOnMyYouTube/SeeMoreOnMyYouTube";

import styles from "./SpeechesExamples.module.scss";

const examples = [
  {
    id: "1",
    videoId: "BhmkDrlU8Cs?si=6hjwrji_nJJML6xD",
    title: "Жінка очима чоловіка",
  },
  {
    id: "2",
    videoId: "EBqm4_GGeV8?si=3h6VUk-1v-xZcF6V",
    title: "Тренінг з основ матриці долі",
  },
  {
    id: "3",
    videoId: "z4mgRLcsv48?si=u97Dki9z1u-LqQz3",
    title: "Родова карма. Взаємини з родом",
  },
  {
    id: "4",
    videoId: "K-Rhc_dFkzY?si=ImYFol8_L8JVYHqS",
    title: "Практика цвяхостояння",
  },
  {
    id: "5",
    videoId: "QQUWJRoNQa4?si=UdqLY2ruOCNwOBQQ",
    title: "Як визначити справжні бажання?",
  },
];

const SpeechesExamples = () => {
  return (
    <Container styled={styles.container}>
      <Title styled={styles.title_mob}>Приклади публіч - них виступів:</Title>
      <Title styled={styles.title}>Приклади публічних виступів:</Title>
      <ul className={styles.video_list}>
        {examples.map((example) => (
          <li key={example.id}>
            <Title styled={styles.video_title} variant="p">
              {example.title}
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

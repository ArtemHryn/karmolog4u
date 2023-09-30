import Container from "@components/Common/Container/Container";
import Video from "./Video";

import styles from "./HowIsGoingNailing.module.scss";
import { unbounded } from "@app/layout";
import SeeMoreOnMyYouTube from "@components/Common/SeeMoreOnMyYouTube/SeeMoreOnMyYouTube";

const HowIsGoingNailing = () => {
  return (
    <Container>
      <h1 className={`${styles.title} ${unbounded.className}`}>
        Як проходить практика цвяхостояння?
      </h1>
      <div className={styles.topic_container}>
        <Video id={"PLuUtpIkhVY?si=JvbMh9b9m1iDWych"} />
        <Video id={"xhtsBunobUs?si=H0RsNzwKHYPFJLx3"} />
      </div>
      <h2 className={`${styles.title} ${unbounded.className}`}>
        Детальніше про практику стояння на цвяхах
      </h2>
      <div className={styles.topic_container2}>
        <Video id={"1elEAD1qJfA?si=QQJAHeGe6e6EWblu"} />
        <SeeMoreOnMyYouTube />
      </div>
    </Container>
  );
};

export default HowIsGoingNailing;

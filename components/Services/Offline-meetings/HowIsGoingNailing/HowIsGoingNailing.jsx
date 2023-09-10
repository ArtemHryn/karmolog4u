import Image from "next/image";
import Link from "next/link";
import Container from "@components/Common/Container/Container";
import Video from "./Video";
import YouTube from "@components/Common/SocialIcons/YouTube";

import styles from "./HowIsGoingNailing.module.scss";
import { unbounded } from "@app/layout";

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
        <Video id={"zZIbiQZ27Jw?si=mTxqZGjAm0z3o9-s"} />
        <div className={styles.inner_topic_container}>
          <p className={`${styles.title} ${unbounded.className}`}>
            Більше відео ви можете переглянути на моєму YouTube каналі
          </p>
          <Link
            href={"https://www.youtube.com/@karmolog4u"}
            target="_blank"
            rel="noreferrer noopener"
            className={`${styles.link} ${unbounded.className}`}
          >
            <YouTube styled={styles.icon} /> YouTube
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default HowIsGoingNailing;

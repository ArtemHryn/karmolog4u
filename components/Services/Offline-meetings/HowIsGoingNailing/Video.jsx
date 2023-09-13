"use client";
import { useRef } from "react";
import Youtube from "react-youtube";

import styles from "./HowIsGoingNailing.module.scss";

const Video = ({ id }) => {
  return (
    <Youtube
      videoId={id}
      iframeClassName={styles.video}
    />
  );
};

export default Video;

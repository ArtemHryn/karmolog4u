"use client";
import { useState } from "react";
import { open_Sans } from "@/app/layout";
// import YouTube from "react-youtube";

import styles from "./VideoButton.module.scss";

const VideoButton = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <button
        type="button"
        className={`${styles.button} ${open_Sans.className}`}
        onClick={() => setShowVideo(true)}
      >
        Поринути у Всесвіт
      </button>

      {showVideo && (
        <div>
          {/* <YouTube
            videoId="iHLkvH5_MYM"
            opts={{ height: "350", width: "300" }}
          /> */}
        </div>
      )}
    </>
  );
};

export default VideoButton;

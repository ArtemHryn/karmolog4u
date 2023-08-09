import Container from "../Common/Container/Container";
import VideoButton from "./VideoButton/VideoButton";
import Marquees from "./Marquees/Marquees";

import styled from "./Hero.module.scss";
import { unbounded } from "@/app/layout";

const Hero = () => {
  return (
    <Container>
      <p className={styled.text}>
        Твій провідник в щасливе та гармонічне життя
      </p>
      <h1 className={`${styled.author} ${unbounded.className}`}>
        СЕРГІЙ СКЛЯРЕНКО
      </h1>
      <p className={styled.text_description} style={{ marginBottom: "24px" }}>
        Я створив для вас простір енергетичної сили, де ви зможете знайти дієві
        інструменти для Вашої глобальної трансформації до шляху свідомого,
        гармонічного та щасливого життя.
      </p>
      <p className={`${styled.text_description}`}>
        {" "}
        З любов&apos;ю та служінням до вас!
      </p>
      <VideoButton />
      <Marquees />
    </Container>
  );
};

export default Hero;

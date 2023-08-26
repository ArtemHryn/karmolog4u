import Image from "next/image";
import Marquees from "./Marquees/Marquees";
import Container from "../Common/Container/Container";
import VideoButton from "./VideoButton/VideoButton";

import styled from "./Hero.module.scss";
import { unbounded } from "@/app/layout";

const Hero = () => {
  return (
    <Container>
      <p className={styled.text}>
        Твій провідник в щасливе та гармонійне життя
      </p>
      <h1 className={`${styled.author} ${unbounded.className}`}>
        СЕРГІЙ СКЛЯРЕНКО
      </h1>
      <div className={styled.description_container}>
        <div style={{ backdropFilter: "blur(4px)" }}>
          <h1 className={`${styled.author2} ${unbounded.className}`}>
            СЕРГІЙ СКЛЯРЕНКО
          </h1>
          <p
            className={`${styled.text_description} ${styled.additional_text_description}`}
          >
            Я створив для вас простір енергетичної сили, де ви зможете знайти
            дієві інструменти для вашої глобальної трансформації до шляху
            свідомого, гармонійного та щасливого життя
          </p>
          <p className={`${styled.text_description}`}>
            {" "}
            З любов&apos;ю та служінням до вас!
          </p>
          <VideoButton />
        </div>
        <Image
          src="/assets/images/SergiyHero.webp"
          width={360}
          height={516}
          alt="Сергій Скляренко"
          className={styled.hero_img}
          priority={true}
        />
      </div>
      <Marquees />
    </Container>
  );
};

export default Hero;

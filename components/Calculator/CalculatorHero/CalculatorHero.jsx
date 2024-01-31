import HeroNav from "@components/Common/HeroNav/HeroNav";
import React from "react";
import CalculatorLogo from "../CalculatorLogo/CalculatorLogo";
import style from'./CalculatorHero.module.scss'
import TitleNoStyles from "@components/Common/TitleNoStyles/TitleNoStyles";

function CalculatorHero({ heroData }) {
  return (
    <>
      <HeroNav linkNames={heroData.links} />
      <section className={style.section}>
        <article className={style.article}>
          <TitleNoStyles variant="h5" styled={style.about}>
            {heroData.about}
          </TitleNoStyles>
          <TitleNoStyles variant="h1" styled={style.title}>
            {heroData.title}
          </TitleNoStyles>
          {heroData.desc.map((desc,index) => (
            <p key={index} className={style.desc}>{desc}</p>
          ))}
        </article>
        <CalculatorLogo styled={style.logo_r} />
        <CalculatorLogo styled={style.logo_l} />
      </section>
    </>
  );
}

export default CalculatorHero;

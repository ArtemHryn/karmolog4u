import HeroNav from "@components/Common/HeroNav/HeroNav";
import Title from "@components/Common/Title/Title";
import React from "react";
import CalculatorLogo from "../CalculatorLogo/CalculatorLogo";
import style from'./CalculatorHero.module.scss'

function CalculatorHero({ heroData }) {
  return (
    <>
      <HeroNav linkNames={heroData.links} />
      <section className={style.section}>
        <article className={style.article}>
          <Title variant="h5" styled={style.about}>
            {heroData.about}
          </Title>
          <Title variant="h1" styled={style.title}>
            {heroData.title}
          </Title>
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

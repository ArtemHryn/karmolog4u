import Image from "next/image";
import Container from "@components/Common/Container/Container";

import styled from "./About.module.scss";
import { unbounded } from "@app/layout";

const About = () => {
  return (
    <Container styled={styled.container}>
      <h1 className={`${styled.headerText} ${unbounded.className}`}>
        Я - Сергій Скляренко
      </h1>
      <div className={styled.about_us_header_container}>
        <Image
          src="/assets/images/aboutSergiy.webp"
          alt="Сергій Скляренко"
          width={443}
          height={586}
          className={styled.img}
        />
        <p className={styled.about_us}>
          Провідний кармолог України, з 8-річним практичним досвідом.
          Психотерапевт. Магістр психології. Член асоціації психосинтезу
          України. Автор трансформаційних практик та медитацій. Засновник
          «Студії трансформації Сергія Скляренка». Ініційований кармічний
          діагност, адепт методу «Матриця долі» Наталії Ладіні.
        </p>
      </div>
      <div className={`${styled.about_us_facts_container}`}>
        <div className={`${styled.about_us_fact} ${styled.about_us_fact1}`}>
          <p className={`${styled.about_us_fact_title} ${unbounded.className}`}>
            8 років
          </p>
          <p className={styled.about_us_fact_description}>
            консультантської практики у методі «Матриця долі»
          </p>
        </div>
        <div className={`${styled.about_us_fact} ${styled.about_us_fact2}`}>
          <p className={`${styled.about_us_fact_title} ${unbounded.className}`}>
            15 000+
          </p>
          <p className={styled.about_us_fact_description}>
            особистих консультацій
          </p>
        </div>
        <div className={`${styled.about_us_fact} ${styled.about_us_fact3}`}>
          <p className={`${styled.about_us_fact_title} ${unbounded.className}`}>
            300+
          </p>
          <p className={styled.about_us_fact_description}>
            випускників школи «Студія трансформації Сергія Скляренка»
          </p>
        </div>
        <div className={`${styled.about_us_fact} ${styled.about_us_fact4}`}>
          <p className={styled.about_us_fact_description}>
            Сертифікація школи «Студія трансформації Сергія Скляренка» офіційно
            підтверджена автором методу «Матриця долі» Наталією Ладіні
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;

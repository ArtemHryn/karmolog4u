import Container from "@components/Common/Container/Container";
import Image from "next/image";

import styles from "./AboutConsultations.module.scss";

import React from "react";
import { unbounded } from "@app/layout";

const AboutConsultations = () => {
  return (
    <Container styled={styles.container}>
      <div className={styles.text_wrapper}>
        <div>
          <h1 className={`${styles.title} ${unbounded.className}`}>
            Про консультації{" "}
          </h1>
          <p className={styles.description}>
            На консультаціях по матриці долі ви отримуєте не просто розбір
            матриці, а нове бачення на вашу матрицю долі, обширну та
            фундаментальну інформацію про вас, як особистість, через мій
            авторський метод “Кармотерапія”. Дана інформація допомагає вам
            зрозуміти причинно-наслідковий зв’язок ситуацій, які у вас
            відбувались. Дізнатися ваше призначення, з якими основними задачами
            прийшла ваша душа в теперішньому втіленні. А також: як розкрити свій
            потенціал, взаємодіяти з сім’єю, реалізовувати себе в
            соціально-матеріальному світі, аспекти дітонародження, створення
            гармонійних стосунків; кармічні причини проблем зі здоров’ям тощо{" "}
          </p>
        </div>
        <div>
          <h2 className={`${styles.title} ${unbounded.className}`}>
            Як проходить консультація?
          </h2>
          <p className={styles.description}>
            Після внесення оплати за консультацію з вами зв’язується менеджер
            Студії, щоб обрати найближчу дату для проведення вашої зустрічі зі
            мною. Консультація проходить в Zoom. Після проведеної
            консультації в залежності від обраного тарифу ви отримуєте в
            месенджері матеріали згідно з планом вашої трансформації, якщо це
            передбачено тарифом, а також ви отримуєте посилання на збереження
            запису вашої консультації
          </p>
        </div>
      </div>
      <picture>
        <source
          srcSet="/assets/images/consultations-Sergiy-Desk.webp"
          media="(min-width: 1280px)"
        />
        <Image
          src="/assets/images/consultations-Sergiy-Tab.webp"
          width={736}
          height={738}
          alt="Сергій Скляренко"
          className={styles.img}
        />
      </picture>
    </Container>
  );
};

export default AboutConsultations;

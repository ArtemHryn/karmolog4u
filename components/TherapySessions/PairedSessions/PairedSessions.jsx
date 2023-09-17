import Container from "@components/Common/Container/Container";
import Image from "next/image";
import React from "react";
import styles from "./PairedSessions.module.scss";
import { unbounded } from "@app/layout";

function PairedSessions() {
  return (
    <Container styledSection={styles.section} styled={styles.cont}>
      <h2 className={`${styles.title} ${unbounded.className}`}>
        Про парні сесії
      </h2>
      {/* <section className={styles.wrap}> */}
      <Image
        src={"/assets/images/therapySessions/PairedSessions.webp"}
        alt="ub"
        width={628}
        height={377}
        className={styles.image}
      />
      <article className={styles.article}>
        <p>
          Парні терапевтичні сесії - це моя авторська методика роботи. В ній я
          застосовую різноманітні методики: гендерної підміни, ототожнення,
          розтотожнення, а також різноманітні техніки: психотерапевтичні,
          медитативні, гіпнотичні. Всі вищезазначені інструменти терапевтичної
          роботи лежать в основі запатентованого мною методу роботи з
          підсвідомістю - “Кармотерапії”. <br />
          Парна терапія - це унікальна можливість чесно відкритись своєму
          партнерові без осуду та страху. Терапевтичні сесії допомагають парі
          знайти порозуміння, озвучити свої переживання партнеру без страху бути
          засудженим або неправильно зрозумілим, знайти шлях до вирішення
          складних та конфліктних ситуацій, а також покращити взаємодію один з
          одним для гармонійних стосунків у парі.
        </p>
      </article>
      {/* </section> */}
    </Container>
  );
}

export default PairedSessions;

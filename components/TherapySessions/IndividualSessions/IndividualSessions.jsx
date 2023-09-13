import Container from "@components/Common/Container/Container";
import Image from "next/image";
import React from "react";
import styles from "./IndividualSessions.module.scss";
import { unbounded } from "@app/layout";

function IndividualSessions() {
  return (
    <Container styledSection={styles.section}>
      <h2 className={`${styles.title} ${unbounded.className}`}>
        Про індивідуальні сесії
      </h2>
      <section className={styles.wrap}>
        <Image
          src={"/assets/images/therapySessions/IndividualSessions.webp"}
          alt="ub"
          width={519}
          height={342}
          className={styles.image}
        />
        <article className={styles.article}>
          <p>
            Я запатентував новий вид психотерапії - “Кармотерапію”. Назва
            “Кармотерапія” походить від слова “Карма”, що символізує причину та
            наслідок. Мій метод включає елементи теорій видатного Р. Ассаджіолі,
            зокрема, роботу з субособистостями та адаптовані методи ототожнення
            і розтотожнення. Також використовую авторські медитаційні техніки,
            які досліджував у своїх наукових роботах. Основою “Кармотерапії” є
            комплексне тестування та аналіз за 22-ма субособистостями, які
            відображають різні аспекти свідомості. Дані методики спрямовуються
            на розблокування ваших внутрішніх потенціалів, щоб ви змогли
            позбутися страхів, які заважають вам вийти зі своєї зони комфорту.
            Кожна сесія - це індивідуальний підхід до роботи, адже метою роботи
            є формування поштовху до ваших нових звершень. В цей період ви не
            залишаєтесь на самоті. На зв&apos;язку з вами завжди я, Сергій
            Скляренко, а також консультант Студії, щоб відповісти на всі
            запитання, які виникають у вас під час терапії.
          </p>
        </article>
      </section>
    </Container>
  );
}

export default IndividualSessions;

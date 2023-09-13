import Container from "@components/Common/Container/Container";
import React from "react";
import styles from "./SessionInsights.module.scss";
import { unbounded } from "@app/layout";

function SessionInsights() {
  return (
    <Container styled={styles.container} styledSection={styles.section}> 
      <h2 className={`${styles.title} ${unbounded.className}`}>
        Як проходять сесії?
      </h2>
      <section className={styles.wrap}>
        <article className={styles.wrap_item}>
          <p>
            Після внесення оплати ви з менеджером погодужєте графік своїх сесій.
            Кожна сесія – це онлайн-зустріч в Zoom. Інтенсивність занять
            залежить від ваших запитів на діагностичній сесії та матеріалів, які
            можуть вам надаватися для самостійного опрацювання. Індивідуальна
            сесія розрахована від 45 до 60 хвилин роботи, а парна сесія - від 90
            до 120 хвилин. Після кожної зустрічі менеджер надсилає вам
            посилання, за яким ви можете зберегти відео вашої терапії.
          </p>
        </article>
        <article className={styles.wrap_item}>
          <p>
            Перша зустріч - це діагностична сесія, на якій ми разом з вами
            формулюємо запит на подальшу роботу. Після даної зустрічі Сергієм
            буде складено індивідуальний терапевтичний лист роботи, згідно
            часових рамок і кількості обраних вами сесій. Для себе ви можете
            обрати 4, 6 або 8 сесій. Головною цінністю даних сесій виступає те,
            що ви отримуєте результат вже після першої зустрічі. Вам не потрібно
            ходити до психолога роками, адже завдяки моїй запатентованій
            методиці “Кармотерапія” ви отримуєте результат тут і зараз. Кожен
            запит і кожна робота унікальні, тому можливо вам знадобиться більше
            сесій, ніж це було заплановано вами.
          </p>
        </article>
        <div className={styles.blur} />
        <div className={`${styles.blur} ${styles.blur_pos}`} />
      </section>
    </Container>
  );
}

export default SessionInsights;

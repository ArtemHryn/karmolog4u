import Container from "@components/Common/Container/Container";
import Image from "next/image";
import React from "react";

import styles from "./MyHistoryFoundation.module.scss";
import Title from "@components/Common/Title/Title";

function MyHistoryFoundation() {
  return (
    <Container styled={styles.container}>
      <Title styled={styles.title}>МОЯ ІСТОРІЯ</Title>
      <section className={styles.section}>
        <article className={styles.article}>
          <p className={styles.text}>
            За роки мого професійного розвитку я отримую сотні повідомлень не
            тільки з запитами на психологічну підтримку, а й прохання допомогти
            матеріально
          </p>
          <p className={styles.text}>
            Проте навіть в здійсненні благодійності я дію по своєму головному
            орієнтиру – відклику душі. Всі збори, які я підтримую особисто та
            закликаю підтримувати мою аудиторію, це 100% бажання душі. Також я
            маю бути впевненим, що кошти дійдуть за цільовим призначенням і
            дійсно сприятимуть створенню блага для інших людей, тому ретельно
            перевіряю документацію кожного збору
          </p>
        </article>
        <picture className={styles.img}>
          <source
            srcSet={
              "/assets/images/humanPsychology/my_history_foundation_desc.webp"
            }
            media="(min-width: 1280px)"
          />
          <Image
            src={"/assets/images/humanPsychology/my_history_foundation.webp"}
            width={736}
            height={360}
            alt="Сергій Скляренко"
            priority={true}
            className={styles.img}
          />
        </picture>
      </section>
    </Container>
  );
}

export default MyHistoryFoundation;

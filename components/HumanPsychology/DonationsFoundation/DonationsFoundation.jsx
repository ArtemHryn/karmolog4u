import Container from "@components/Common/Container/Container";
import Image from "next/image";
import React from "react";

import styles from "./DonationsFoundation.module.scss";
import Title from "@components/Common/Title/Title";

function DonationsFoundation() {
  return (
    <Container styled={styles.container} styledSection={styles.section}>
      <Title styled={styles.title} variant="h2">
        ДОНАТИ, ЯКІ РЕАЛІЗУЮТЬ МРІЇ!
      </Title>
      <section className={styles.section}>
        <article className={styles.article}>
          <p className={styles.text}>
            Донати в благодійний фонд ГО &#34;Психологія людської долі&#34; – це
            можливість приблизити вас до здійснення вашого бажання. Енергія, яку
            ви зі своїм конкретним наміром відправляєте в якості донату,
            примноженною повертається до вас і пришвидшує отримання бажаного
          </p>
          <p className={styles.text}>
            Все що вам потрібно – це сформувати свій запит, відчути стан, немов
            ви прямо зараз отримуєте те, чого забажали, і з відкритим серцем
            зробити благодійний внесок, який сприятиме швидкій реалізації
            задуманого
          </p>
          <p className={styles.text}>
            В будь-який момент 24/7 ви можете зробити благодійний внесок на
            рахунок фонду ГО &#34;Психологія людської долі&#34;
          </p>
        </article>
        <picture className={styles.img}>
          <source
            srcSet={
              "/assets/images/humanPsychology/donations_foundation_desc.webp"
            }
            media="(min-width: 1280px)"
          />
          <Image
            src={"/assets/images/humanPsychology/donations_foundation.webp"}
            width={736}
            height={360}
            alt="Сергій Скляренко"
            priority={true}
            className={styles.img}
          />
        </picture>
      </section>
      <div className={styles.spot} />
    </Container>
  );
}

export default DonationsFoundation;

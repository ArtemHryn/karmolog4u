import Container from "@components/Common/Container/Container";
import Image from "next/image";
import React from "react";

import styles from "./RecommendationFoundation.module.scss";
import Title from "@components/Common/Title/Title";
import ArrowRight from "@components/Common/Icons/HumanPsychologyIcons/ArrowRight";

function RecommendationFoundation() {
  return (
    <Container styled={styles.container} styledSection={styles.section}>
      <Title styled={styles.title} variant="h2">
        Рекомендації по внесенню благодійного внеску в фонд ГО “Психологія
        людської долі”
      </Title>
      <section className={styles.section}>
        <picture className={styles.img}>
          <source
            srcSet={
              "/assets/images/humanPsychology/recommendation_foundation_desc.webp"
            }
            media="(min-width: 1280px)"
          />
          <Image
            src={
              "/assets/images/humanPsychology/recommendation_foundation.webp"
            }
            width={736}
            height={360}
            alt="Сергій Скляренко"
            priority={true}
            className={styles.img}
          />
        </picture>
        <article className={styles.article}>
          <p className={styles.text}>
            1. Сформулюйте чіткий намір на що саме ви хочете направити енергію
            через грошовий відкуп (це може бути будь-який ваш особистий намір,
            бажання)
          </p>
          <p className={styles.text}>
            2. Відправте суму, якою ви готові поділитися від щирого серця, на
            реквізити благодійного фонду ГО “Психологія людської долі”. Сума
            вашого вкладу = енергія, яку ви вкладаєте в реалізацію свого наміру
          </p>
          <p className={styles.text}>
            3. В момент переказу коштів порадійте за того, хто їх отримає.
            Абсолютно всі збори, які підтримує ГО “Психологія людської долі”,
            100% перевірені членами правління ГО “Психологія людської долі”.
            Зібрані кошти гарантовано направляються за цільовим призначенням
          </p>
        </article>
      </section>
      <section className={`${styles.section}`}>
        <article className={styles.article_thanks}>
          <Title variant="h5" styled={styles.title_thanks}>
            ЗРОБИТИ БЛАГОДІЙНИЙ ВНЕСОК
          </Title>
          <ArrowRight styled={styles.arrow_thanks} />
          <a href="#" className={styles.link_thanks}>
            Благодійний внесок
          </a>
        </article>
        <article className={styles.article_thanks}>
          <p className={styles.text_thanks}>Щиро дякуємо вам за довіру!</p>
        </article>
      </section>
      <div className={styles.spot} />
    </Container>
  );
}

export default RecommendationFoundation;

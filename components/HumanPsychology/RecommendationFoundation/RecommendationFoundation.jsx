import Container from '@components/Common/Container/Container';
import Image from 'next/image';
import React from 'react';

import styles from './RecommendationFoundation.module.scss';
import Title from '@components/Common/Title/Title';
import ArrowRight from '@components/Common/Icons/HumanPsychologyIcons/ArrowRight';

function RecommendationFoundation() {
  return (
    <Container styled={styles.container} styledSection={styles.section}>
      <Title styled={styles.title} variant="h2">
        Рекомендації по внесенню благодійного внеску в фонд ГО “Психологія людської долі”
      </Title>
      <div className={styles.section}>
        <picture className={styles.img}>
          <source
            srcSet={'/assets/images/humanPsychology/recommendation_foundation_desc.webp'}
            media="(min-width: 1280px)"
          />
          <Image
            src={'/assets/images/humanPsychology/recommendation_foundation.webp'}
            width={736}
            height={360}
            alt="Сергій Скляренко"
            priority={true}
            className={styles.img}
          />
        </picture>
        <article className={styles.article}>
          <p className={styles.text}>
            Щоб зробити благодійний внесок, сформулюйте чіткий намір, відправте суму на рахунок
            фонду та порадійте за тих, хто отримає допомогу.
          </p>
          <p className={styles.text}>
            Ми гарантуємо, що зібрані кошти будуть направлені за цільовим призначенням, адже
            абсолютно всі збори, які підтримує наша ГО, 100% перевірені членами правління ГО
            “Психологія людської долі”.
          </p>
        </article>
      </div>
      <div className={`${styles.section}`}>
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
      </div>
      <div className={styles.spot} />
    </Container>
  );
}

export default RecommendationFoundation;

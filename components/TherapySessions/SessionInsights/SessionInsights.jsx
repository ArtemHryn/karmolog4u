import Container from '@components/Common/Container/Container';
import React from 'react';
import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

import styles from './SessionInsights.module.scss';
import Image from 'next/image';

function SessionInsights() {
  return (
    <Container styled={styles.container} styledSection={styles.section}>
      <TitleNoStyles variant="h2" styled={`${styles.title}`}>
        Як, що, де, коли, яким чином?
      </TitleNoStyles>
      <div className={styles.wrap}>
        <article className={styles.text_wrapper}>
          <p className={styles.text}>
            Родзинка цієї роботи – це індивідуальність, саме тому замовивши таку послугу ви
            отримуєте не теорію про когось, а практику для вас!
          </p>
          <p className={styles.text}>
            Після внесення оплати починається, попередньо погоджена з вами, покроково розпланована
            робота виходячи з ваших запитів, яка ймовірніше не тільки закриє нагальні запити, а й
            суттєво покращить життя у різних напрямках, які на це потребують.
          </p>
        </article>
        <picture>
          <source
            srcSet={'/assets/images/therapySessions/session-insight-desk.webp'}
            media="(min-width: 1280px)"
          />
          <source
            srcSet={'/assets/images/therapySessions/session-insight-tab.webp'}
            media="(min-width: 768px)"
          />
          <Image
            src={'/assets/images/therapySessions/session-insight-mob.webp'}
            width={736}
            height={246}
            alt="session-insight"
          />
        </picture>
      </div>
    </Container>
  );
}

export default SessionInsights;

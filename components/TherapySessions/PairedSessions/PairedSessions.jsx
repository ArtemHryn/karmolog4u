import Container from '@components/Common/Container/Container';
import Image from 'next/image';
import React from 'react';
import Title from '@components/Common/Title/Title';

import styles from './PairedSessions.module.scss';

function PairedSessions() {
  return (
    <Container>
      <Title styled={`${styles.title}`}>Про парні сесії</Title>
      <div className={styles.wrap}>
        <article className={styles.article}>
          <p>Парна терапія – це можливість не тільки сказати, а перш за все, бути почутим.</p>
          <p>
            Парні терапевтичні сесії — це моя унікальна авторська методика роботи, в якій поєднані
            різноманітні методики: гендерної підміни, ототожнення, розтотожнення, а також техніки:
            психотерапевтичні, медитативні, гіпнотичні. Саме ці інструменти терапевтичної роботи й
            лежать в основі запатентованого мною методу роботи з підсвідомістю – “Кармотерапії”.
          </p>
          <p>
            Терапевтичні сесії допомагають парі знайти порозуміння, озвучити свої переживання
            партнеру без остраху засудження чи не вірної інтерпретації, знайти шлях до
            розв&apos;язання конфліктів та поліпшення взаємодії у будуванні гармонійних стосунків
            тощо.
          </p>
        </article>
        <picture className={styles.image}>
          <source
            srcSet={'/assets/images/therapySessions/PairedSessions-desk.webp'}
            media="(min-width: 1280px)"
          />
          <Image
            src={'/assets/images/therapySessions/PairedSessions.webp'}
            alt="ub"
            width={628}
            height={377}
            className={styles.image}
          />
        </picture>
      </div>
    </Container>
  );
}

export default PairedSessions;

import Image from 'next/image';
import Container from '@components/Common/Container/Container';
import Title from '@components/Common/Title/Title';

import styles from './AboutConsultations.module.scss';

const AboutConsultations = () => {
  return (
    <Container>
      <Title styled={`${styles.title}`}>Про консультації </Title>
      <div className={styles.wrapper}>
        <article className={styles.article}>
          <p>
            Іноді достатньо лише напрямку чи підказки, щоб змінити вкрай важливу ситуацію або
            взагалі хід життя — таким помічником й стане розбір Матриці зі мною.
          </p>
          <p>
            Консультації з Матриці долі, використовуючи мій авторський метод
            &apos;&apos;Кармотерапія&apos;&apos;, надають глибоке розуміння вашої особистості та
            пропонують новий погляд на вашу Матрицю долі.
          </p>
          <p>
            Ця інформація допоможе вам зрозуміти причинно-наслідковий зв’язок ваших життєвих
            ситуацій, кармічні борги, які заважають здоров’ю, розкрити потенціал та з’ясувати мету
            існування.
          </p>
          <p>
            Ви отримаєте поради щодо взаємодії з родиною, реалізації в соціально-матеріальному
            світі, аспектів дітонародження, створення гармонійних стосунків тощо.
          </p>
        </article>
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
      </div>
    </Container>
  );
};

export default AboutConsultations;

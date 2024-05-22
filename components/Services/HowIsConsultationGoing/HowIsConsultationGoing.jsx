import Image from 'next/image';
import Container from '@components/Common/Container/Container';
import Title from '@components/Common/Title/Title';

import styles from './HowIsConsultationGoing.module.scss';

const HowIsConsultationGoing = () => {
  return (
    <Container>
      <Title styled={styles.title}>Як проходить консультація?</Title>
      <div className={styles.wrapper}>
        <article className={styles.article}>
          <p>
            Після здійснення оплати за консультацію наш менеджер зв’яжеться з вами для визначення
            найзручнішої для вас дати та уточнення деталей.
          </p>
          <p>Зустріч відбувається онлайн (Zoom).</p>
          <p>
            Якщо це передбачено обраним тарифом, ви отримаєте допоміжні матеріали, а також — запис
            вашої консультації.
          </p>
        </article>
        <picture>
          <source
            srcSet="/assets/images/how-is-consultation-going.webp"
            media="(min-width: 1280px)"
          />
          <Image
            src="/assets/images/how-is-consultation-going.webp"
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

export default HowIsConsultationGoing;

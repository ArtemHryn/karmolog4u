import Image from 'next/image';
import Container from '@components/Common/Container/Container';

import styles from './AboutRetreat.module.scss';
import Title from '@components/Common/Title/Title';

const AboutRetreat = () => {
  return (
    <Container>
      <Title styled={styles.title}>Що на вас чекає?</Title>
      <div className={styles.wrapper}>
        <div className={styles.text_container}>
          <p className={styles.text}>*Тема та програма ретриту щоразу різні.</p>
          <ul className={styles.list}>
            <li>
              <p className={styles.text}>практики для отримання сили роду</p>
            </li>
            <li>
              <p className={styles.text}>пропрацювання страхів</p>
            </li>
            <li>
              <p className={styles.text}>окремий день, присвячений ритуалу в місячне затемнення</p>
            </li>
            <li>
              <p className={styles.text}>розкриття тотемної тварини</p>
            </li>
            <li>
              <p className={styles.text}>досвід холотропного дихання</p>
            </li>
            <li>
              <p className={styles.text}>звукотерапію чашами Тибету, гонгом і бубном</p>
            </li>
            <li>
              <p className={styles.text}>багато відкриттів та відповідей</p>
            </li>
          </ul>
          <p className={styles.text}>
            Як результат — ви здійсните глибинну трансформацію трьох рівнів свідомості: душі, розуму
            та тіла, яка відбудеться завдяки повному зануренню в обрані практики під керівництвом
            Сергія Скляренка.
          </p>
        </div>
        <picture className={styles.img}>
          <source srcSet="/assets/images/about_retreat_desc.webp" media="(min-width: 1280px)" />
          <Image
            src={'/assets/images/about_retreat.webp'}
            width={736}
            height={440}
            alt="практики для отримання сили стародавніх предків, позбавлення від
              страхів, отримання матеріального достатку"
          />
        </picture>
      </div>
    </Container>
  );
};

export default AboutRetreat;

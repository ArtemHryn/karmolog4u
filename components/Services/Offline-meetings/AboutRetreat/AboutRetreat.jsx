import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import Container from '@/components/Common/Container/Container';
import Title from '@/components/Common/Title/Title';

import styles from './AboutRetreat.module.scss';

const list = {
  uk: [
    'практики для отримання сили роду',
    'пропрацювання страхів',
    'окремий день, присвячений ритуалу в місячне затемнення',
    'розкриття тотемної тварини',
    'досвід холотропного дихання',
    'звукотерапію чашами Тибету, гонгом і бубном',
    'багато відкриттів та відповідей',
  ],
  ru: [
    'практики для получения силы рода',
    'проработка страхов',
    'отдельный день, посвященный ритуалу в лунное затмение',
    'раскрытие тотемного животного',
    'опыт холотропного дыхания',
    'звукотерапия чашами Тибета, гонгом и бубном',
    'много открытий и ответов',
  ],
};

const AboutRetreat = () => {
  const locale = useLocale();
  const t = useTranslations('Services.offline_meetings.retreat.about_retreat');
  return (
    <Container>
      <Title styled={styles.title}>{t('title')}</Title>
      <div className={styles.wrapper}>
        <div className={styles.text_container}>
          <p className={styles.text}>{t('about_topics')}</p>
          <ul className={styles.list}>
            {list[locale].map((el, index) => (
              <li key={index}>
                <p className={styles.text}>{el}</p>
              </li>
            ))}
          </ul>
          <p className={styles.text}>{t('text')}</p>
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

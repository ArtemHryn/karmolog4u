import { useTranslations } from 'next-intl';
import Container from '@components/Common/Container/Container';
import HeroNav from '@components/Common/HeroNav/HeroNav';

import styles from './HealthMapHero.module.scss';
import Image from 'next/image';
import Title from '@components/Common/Title/Title';

const links = [
  { href: '/products/courses', name: { uk: 'Вебінари', ru: 'Вебинары' } },
  {
    name: {
      uk: 'ДЕВ’ЯТИЧАКРОВА КАРТА ЗДОРОВ’Я  В "МАТРИЦІ ДОЛІ"',
      ru: 'ДЕВЯТИЧАКРОВАЯ КАРТА ЗДОРОВЬЯ В "МАТРИЦЕ СУДЬБЫ"',
    },
    href: '/products/courses/health-map-details',
  },
];

const HealthMapHero = () => {
  const t = useTranslations('Author_products.courses.health_map.hero');
  return (
    <Container>
      <HeroNav linkNames={links} />
      <div className={styles.box}>
        <div className={styles.text_wrapper}>
          <Title className={`${styles.title}`}>{t('title')}</Title>

          <p className={styles.text}>{t('description')}</p>
        </div>
        <picture className={styles.img}>
          <Image
            src={'/assets/images/meditations/health-map-details.webp'}
            alt={links[1].name}
            width={1280}
            height={920}
            className={styles.img}
          />
        </picture>
      </div>
    </Container>
  );
};

export default HealthMapHero;

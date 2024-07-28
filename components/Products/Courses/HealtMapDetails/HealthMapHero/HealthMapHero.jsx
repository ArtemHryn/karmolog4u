import Link from 'next/link';
import Container from '@components/Common/Container/Container';
import HeroNav from '@components/Common/HeroNav/HeroNav';

import styles from './HealthMapHero.module.scss';
import Image from 'next/image';
import Title from '@components/Common/Title/Title';
import { open_Sans } from '@app/[locale]/layout';

const links = [
  { href: '/products/courses', name: 'Вебінари' },
  {
    name: 'ДЕВ’ЯТИЧАКРОВА КАРТА ЗДОРОВ’Я  В “МАТРИЦІ ДОЛІ”',
    href: '/products/courses/health-map-details',
  },
];

const HealthMapHero = () => {
  return (
    <Container>
      <HeroNav linkNames={links} />
      <div className={styles.box}>
        <div className={styles.text_wrapper}>
          <Title className={`${styles.title}`}>
            ДЕВ’ЯТИЧАКРОВА КАРТА ЗДОРОВ’Я В “МАТРИЦІ ДОЛІ”
          </Title>

          <p className={styles.text}>
            Дев&#8216;ятичакрова карта здоров&#8216;я в ”Матриці долі” — це курс, на якому ви
            навчитесь працювати зі своїм здоровям на рівні причин, а не наслідків, для відкриття
            перед собою можливості істинного зцілення і переходу у вібрації Нового Часу.
          </p>
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

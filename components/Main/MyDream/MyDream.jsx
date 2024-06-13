import Image from 'next/image';
import Container from '@components/Common/Container/Container';
import Arrow from './Arrow/Arrow';

import styles from './MyDream.module.scss';
import { open_Sans, unbounded } from '@app/layout';
import Link from 'next/link';
import ArrowTab from './Arrow/ArrowTab';
import Circles from './Circles/Circles';

const MyDream = () => {
  return (
    <Container styled={styles.section_container} styledSection={styles.section}>
      <div className={styles.spot} />
      <div className={styles.spot2} />

      <div style={{ position: 'relative' }}>
        <Circles />
        <h1 className={`${styles.section_title} ${unbounded.className}`}>
          МОЯ ЗАПОВІТНА МРІЯ - ГЛОБАЛЬНА ТРАНСФОРМАЦІЯ ЛЮДСТВА
        </h1>
        <Arrow />
        <ArrowTab />
      </div>
      <div className={styles.container}>
        <div className={styles.text_container}>
          <Image
            src="/assets/images/studentsMob.webp"
            width={328}
            height={152}
            alt="Студенти студії"
            className={styles.img}
          />
          <p className={styles.text_description}>
            Але мріяти то далеко не все, головне прагнути й працювати, саме тому для
            реалізації  мрії такого глобального масштабу об’єдналися мої учні з усього світу, які
            створюють власні медитації по 22 енергіям, завдяки яким роблять світ кращим, а людей
            щасливішими.
          </p>
          <Link href="/products/meditations" className={`${styles.link} ${open_Sans.className}`}>
            Медитації по 22 енергіям
          </Link>
        </div>
        <picture>
          <source srcSet="/assets/images/studentsDesk.webp" media="(min-width: 1280px)" />
          <Image
            src="/assets/images/studentsTab.webp"
            width={261}
            height={281}
            alt="Студенти студії"
            className={styles.imgTab}
          />
        </picture>
      </div>
    </Container>
  );
};

export default MyDream;

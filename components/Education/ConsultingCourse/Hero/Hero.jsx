import Container from '@/components/Common/Container/Container';
import HeroNav from '@/components/Common/HeroNav/HeroNav';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Hero.module.scss';
import { open_Sans } from '@/app/[locale]//layout';

import Title from '@/components/Common/Title/Title';

const linkNames = [{ href: '/consulting-course', name: 'Консультантський курс' }];

function Hero() {
  return (
    <Container>
      <HeroNav linkNames={linkNames} />
      <div className={styles.box}>
        <div className={styles.text_wrapper}>
          <Title styled={styles.title}>КОНСУЛЬТАНТСЬКИЙ КУРС</Title>
          <Title styled={styles.title_mobile}>КОНСУЛЬТАНТ- СЬКИЙ КУРС</Title>
          <Link
            href={`${linkNames[0].href}/dialog`}
            className={`${styles.button} ${open_Sans.className}`}
          >
            Записатися
          </Link>
        </div>
        {/* <picture className={styles.img}>
          {img.imgDesk && (
            <source srcSet={img.imgDesk} media="(min-width: 1280px)" />
          )} */}
        <Image
          src={'/assets/images/consultingCourse/Hero.webp'}
          alt={''}
          width={1280}
          height={920}
          className={styles.img}
        />
        {/* </picture> */}
      </div>
    </Container>
  );
}

export default Hero;

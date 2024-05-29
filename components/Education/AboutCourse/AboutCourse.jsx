import Image from 'next/image';
import Container from '@components/Common/Container/Container';
import Title from '@components/Common/Title/Title';
import TextContainer from './TextContainer';

import styles from './AboutCourse.module.scss';
import TestBox from './TestBox';

const AboutCourse = ({ img, text = [], styled, showTest = false }) => {
  return (
    <Container>
      <Title styled={styles.title}>Про курс</Title>
      <div className={styles.wrapper}>
        <TextContainer text={text} />
        <picture className={styles.img}>
          {img.imgDesk && <source srcSet={img.imgDesk} media="(min-width: 1280px)" />}
          <Image
            src={img.img}
            alt={img.alt}
            width={736}
            height={500}
            className={`${styles.img} ${styled ? styled : ''}`}
          />
        </picture>
      </div>
      {showTest && <TestBox />}
    </Container>
  );
};

export default AboutCourse;

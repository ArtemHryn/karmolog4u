import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import Container from '@components/Common/Container/Container';
import Title from '@components/Common/Title/Title';
import TextContainer from './TextContainer';
import TestBox from './TestBox';

import styles from './AboutCourse.module.scss';

const AboutCourse = ({ img, text = [], styled, showTest = false }) => {
  const locale = useLocale();
  const t = useTranslations('Education.karmologist_himself.about_course');
  const renderText = Array.isArray(text) ? text : text[locale];
  return (
    <Container>
      <Title variant="h2" styled={styles.title}>
        {t('title')}
      </Title>
      <div className={styles.wrapper}>
        <TextContainer text={renderText} />
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
